import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonClicks, setButtonClicks] = useState(null);

  const handleButtonClick = () => {
    setButtonClicks((buttonClicks ?? 0) + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Controle de estado simples:
          <div>
            <button onClick={handleButtonClick}>{!buttonClicks ? 'Começar contagem' : `Clicou ${buttonClicks}`}</button>
          </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
