import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const getImage = async (canvasDrawing) => {
    if (canvasDrawing.current) {
      let theImage = await canvasDrawing.current.getDataURL();
      var imageNow = new Image();
      imageNow.src = theImage;
      return imageNow;
    }
};

const loadModel = async () => {
  const loadedModel = await tf.loadLayersModel('https://raw.githubusercontent.com/aralroca/MNIST_React_TensorFlowJS/master/public/assets/model.json');
  return loadedModel;
};
const loadedModelPromise = loadModel();

export function TimeGuessDrawing({ drawWord, assignDrawing, addPoint, canvasDrawing}) {
    const [word, setWord] = useState('');
    const [image, setImage] = useState(null);
    const [model, setModel] = useState(null);

    const fetchData = async () => {
      const imageData = await getImage(canvasDrawing);
      const imageTensor = await preprocessImage(imageData);
      setImage(imageTensor);
    };

    const preprocessImage = async (imageData) => {
      const image = await tf.browser.fromPixels(imageData);
      const resizedImage = tf.image.resizeBilinear(image, [28, 28]);
      const grayscaleImage = resizedImage.mean(2);
      const expandedImage = grayscaleImage.expandDims(2);
      const normalizedImage = expandedImage.div(255.0);
      const batchedImage = normalizedImage.expandDims(0);
      return batchedImage;
    };

    useEffect(() => {
      loadedModelPromise.then((loadedModel) => {
        setModel(loadedModel);
      });
    }, []);

    useEffect(() => {
      const timer = setInterval(async () => {
        fetchData();
        if (image != null){
          var prediction = model.predict(image);
          alert(prediction);
          var predictedWord = prediction.argMax(1).arraySync()[0];
          setWord(predictedWord);
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