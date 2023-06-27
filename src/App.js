import './App.css';
import CanvasDraw from "@win11react/react-canvas-draw";
import { Helmet } from 'react-helmet';
import Logo from './Assets/Logo.png';
import Robot from './Assets/Robot.png';
import React, { useState, useRef, useEffect } from 'react';
import Timer from './Components/Timer'
import { AssignDrawing, TimeGuessDrawing } from './Components/RoundOne'

function App() {
  const [homepage, showHome] = useState(true);
  const [infopage, showInfo] = useState(false);
  const [stats, showStats] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [firstround, showFRound] = useState(false);
  const canvasRef = useRef(null);

  const handleButtonClick = (boxName) => {
    showHome(false);
    showInfo(true);
    showStats(true);
  };

  const handleStart = () => {
    setTimerActive(true);
    showInfo(false);
    showFRound(true);
  };

  const getImage = async () => {
    const dataUrl = canvasRef.current.getDataURL();
  };

  return (
    <div className="App">
      <Helmet>
        <link href='https://fonts.googleapis.com/css?family=Indie Flower' rel='stylesheet' />
      </Helmet>

      {/* HOME */}
      {homepage && (
        <div className='Home'>
          <div className="CornerText"><b>From Google's Quick Draw Dataset</b></div>
          <div className="CornerTextTwo"><b>Art <p>Against</p> AI</b></div>
          <div className="CornerTextThree"><b>Can You <p>Draw Better</p> Than AI?</b></div>
          <button className="questionBox"><b>?</b></button>
          <div className="Logo"><img src={Logo} alt="Logo" /></div>

          <div className="flex-container">
            <button className="easyBox" onClick={() => handleButtonClick('easyBox')}>
              <p>Easy</p>
            </button>
            <button className="mediumBox" onClick={() => handleButtonClick('mediumBox')}>
              <p>Medium</p>
            </button>
            <button className="hardBox" onClick={() => handleButtonClick('hardBox')}>
              <p>Hard</p>
            </button>
          </div>
        </div>
      )}

      {/* Score and Timer */}
      {stats && (
        <div className="thirdDiv">
          <div className="scoreFlex">
            <div className="playerScore">
              You: 00
            </div>
            <Timer timerActive={timerActive} />
            <div className="aiScore">
              AI: 00
            </div>
          </div>
        </div>
      )}

      {/* Instructions Page */}
      {infopage && (
        <div className="secondDiv">
          <div className="InfoBox">
            <p>*</p>
            <b><u>Instructions</u></b>
            <ol><b>
              <li>In the first round, the player will draw given words in under 60 seconds. The AI needs to guess what the drawing is for the player to get a point.</li>
              <li>In the second round, the AI will draw given words in under 60 seconds. The player needs to guess what the drawing is for the AI to get a point.</li>
              <li>After the two rounds, the points will be compared, and whoever has the most points wins!</li>
            </b></ol>
            <button className="startBox" onClick={handleStart}>
              <p>START</p>
            </button>
          </div>
        </div>
      )}

      {/* First Round */}
      {firstround && (
        <div className="fourthDiv">

          <div className="wordText">Draw: <AssignDrawing /></div>

          <button className="Erase" onClick={() => { canvasRef.current.clear(); }}>ERASE</button>
          <CanvasDraw ref={canvasRef}
            style={{ width: '100%', height: '80vh' }}
            brushRadius={4}
            brushColor="#000000"
            hideInterface={false}
            hideGrid={true}
          />

          <div className="Robot"><img src={Robot} alt="Robot" /></div>

          <div className="RobotAnswer">That is a <TimeGuessDrawing /></div>
        </div>
      )}
    </div>
  );
}

export default App;
