import React, { useState, useEffect } from 'react';
import Timer from './Timer';

export function TimeGuessDrawing({ drawWord, assignDrawing, addPoint }) {
    const [word, setWord] = useState('');
  
    useEffect(() => {
      const timer = setInterval(() => {
        const possibleDrawings = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const randomIndex = Math.floor(Math.random() * possibleDrawings.length);
        const theWord = possibleDrawings[randomIndex];
        setWord(theWord);
      }, 500);
  
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