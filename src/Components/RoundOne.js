import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import Timer from './Timer';

const getImage = async (canvasDrawing) => {
    if (canvasDrawing.current) {
      let theImage = await canvasDrawing.current.getDataURL('image/png');
      console.log(theImage);
      return theImage;
    }
};

export function TimeGuessDrawing({ drawWord, assignDrawing, addPoint, canvasDrawing}) {
    const [word, setWord] = useState('');
    const image = getImage(canvasDrawing);
    useEffect(() => {
      const timer = setInterval(() => {
        const possibleDrawings = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const randomIndex = Math.floor(Math.random() * possibleDrawings.length);
        const theWord = possibleDrawings[randomIndex];
        setWord(theWord);
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