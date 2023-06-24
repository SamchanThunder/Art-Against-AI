import './App.css';
import { Helmet } from 'react-helmet';
import Logo from './Assets/Logo.png';
import React, { useState } from 'react';

function App() {
  const [isDivDisabled, setDivDisabled] = useState(false);
  const [isSecondDivEnabled, setSecondDivEnabled] = useState(false);

  const handleButtonClick = (boxName) => {
    setDivDisabled(true);
    setSecondDivEnabled(true);
  };

  return (
    <div className="App">

      <Helmet><link href='https://fonts.googleapis.com/css?family=Indie Flower' rel='stylesheet'/></Helmet>
      
      {/* HOME */}
      <div className={`content ${isDivDisabled ? 'disabled' : ''}`}>
        <div className="CornerText"><b>From Google's <p>Quick Draw</p><p>Dataset</p></b></div>
        <div className="CornerTextTwo"><b>By <p>Samchan Lee</p></b></div>

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
      {isSecondDivEnabled && (
        <div className="secondDiv">
          hi
        </div>
      )}

    </div>
  );
}

export default App;
