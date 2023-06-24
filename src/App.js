import './App.css';
import { Helmet } from 'react-helmet';
import Logo from './Assets/Logo.png';
import React, { useState } from 'react';

function App() {
  const [homepage, showHome] = useState(true);
  const [infopage,showInfo] = useState(false);
  const handleButtonClick = (boxName) => {
    showHome(false);
    showInfo(true);
  };

  return (
    <div className="App">

      <Helmet><link href='https://fonts.googleapis.com/css?family=Indie Flower' rel='stylesheet'/></Helmet>
      
      {/* HOME */}
      {homepage && (<div className='Home'>
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
      </div>)}

      {/* Instructions Page */}
        {infopage && (<div className="secondDiv">
          <div className="InfoBox"> 
            <p>*</p>
            <b><u>Instructions</u></b>
            <ol><b>
              <li>In the first round, the player will draw given words in under 60 seconds. The AI needs to guess what the player drew to get a point.</li>
              <li>In the second round, the AI will draw given words in under 60 seconds. The player needs to guess what the AI drew to get a point.</li>
              <li>After the two rounds, the points will be compared, and whoever has the most points wins!</li>
            </b></ol>
            <button className="startBox">
              <p>START</p>
            </button>
          </div>
        </div>)}

    </div>

  );
}

export default App;
