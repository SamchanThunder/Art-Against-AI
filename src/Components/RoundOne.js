import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import Timer from './Timer';

const getImage = async (canvasDrawing) => {
    if (canvasDrawing.current) {
      let theImage = await canvasDrawing.current.getDataURL();
      return theImage;
    }
};

const loadModel = async () => {
  const loadedModel = await tf.loadLayersModel('https://raw.githubusercontent.com/google/tfjs-mnist-workshop/master/model/model.json');
  return loadedModel;
};
const loadedModelPromise = loadModel();

export function TimeGuessDrawing({ drawWord, assignDrawing, addPoint, canvasDrawing}) {
    const [word, setWord] = useState('');
    const [image, setImage] = useState(null);
    const [model, setModel] = useState(null);

    const fetchData = async () => {
      const imageData = await getImage(canvasDrawing);
      setImage(imageData);
    };

    useEffect(() => {
      loadedModelPromise.then((loadedModel) => {
        setModel(loadedModel);
      });
    }, []);

    useEffect(() => {
      const timer = setInterval(async () => {
        fetchData();
        if (model && image) {
          let prediction = model.predict(image).reshape([1,-1]);
          setWord(prediction);
        }
      }, 3000);
  
      if (word === drawWord) {
        assignDrawing();
        addPoint();
      }
  
      return () => {
        clearInterval(timer);
      };
    });
  
    return word;
  }