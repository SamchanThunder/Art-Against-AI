import React, { useState, useEffect } from 'react';
import Timer from './Timer';

export function AssignDrawing() {
  const possibleDrawings = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const randomIndex = Math.floor(Math.random() * possibleDrawings.length);
  const theWord = possibleDrawings[randomIndex];
  const wordElement = theWord;

  return wordElement
}

export function TimeGuessDrawing() {
  const [word, setWord] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const possibleDrawings = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const randomIndex = Math.floor(Math.random() * possibleDrawings.length);
      const theWord = possibleDrawings[randomIndex];
      const wordElement = theWord
      setWord(wordElement);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return word;
}
