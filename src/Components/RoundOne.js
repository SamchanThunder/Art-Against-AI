import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import Timer from './Timer';

const getImage = async (canvasDrawing) => {
    if (canvasDrawing.current) {
      let theImage = await canvasDrawing.current.getDataURL('image/png');
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

    useEffect(() => {
      const fetchData = async () => {
        const imageData = await getImage(canvasDrawing);
        setImage(imageData);
      };
      fetchData();
    }, []);

    useEffect(() => {
      loadedModelPromise.then((loadedModel) => {
        setModel(loadedModel);
      });
    }, []);

    useEffect(() => {
      const timer = setInterval(async () => {
        if (model && image) {
          const prediction = await model.predict(image);
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