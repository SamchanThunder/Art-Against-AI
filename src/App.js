import './App.css';
import { Helmet } from 'react-helmet';
import Logo from './Assets/Logo.png';

function App() {
  const handleButtonClick = (boxName) => {
    // Handle button click event for each box
    alert(`Button ${boxName} clicked!`);
  };

  return (
    <div className="App">

      <Helmet><link href='https://fonts.googleapis.com/css?family=Indie Flower' rel='stylesheet'/></Helmet>
      <div className="Home">
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

    </div>
  );
}

export default App;
