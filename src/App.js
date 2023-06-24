import './App.css';
import { Helmet } from 'react-helmet';
import Logo from './Assets/Logo.png';
import React, { useState } from 'react';

function App() {

  const handleButtonClick = (boxName) => {
    console.log();
  };

  return (
    <div className="App">

      <Helmet><link href='https://fonts.googleapis.com/css?family=Indie Flower' rel='stylesheet'/></Helmet>
      
      {/* HOME */}
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

      {/* Second Page */}
        <div className="secondDiv">
          Test
        </div>

    </div>
  );
}

export default App;
