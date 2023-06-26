import React, { useState, useEffect, useRef } from 'react';
import Timer from './Timer';
import * as tf from '@tensorflow/tfjs';

const guessRight = 0;
  
// async function loadAiModel() {
//   const model = await tf.loadLayersModel(null);
//   return model;
// }

// const modelPromise = loadAiModel();

export function AssignDrawing() {
  const possibleDrawings = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const randomIndex = Math.floor(Math.random() * possibleDrawings.length);
  const theWord = possibleDrawings[randomIndex];
  const wordElement = "Draw: " + theWord;

  return <div className="wordText">{wordElement}</div>;
}

export function GuessDrawing(word, url) {
    const possibleDrawings = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const randomIndex = Math.floor(Math.random() * possibleDrawings.length);
    const theWord = possibleDrawings[randomIndex];
    const wordElement = <div className="RobotAnswer">{theWord}</div>;
    return <div>That is a {wordElement}</div>;
}

    