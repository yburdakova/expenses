import React from 'react';
import Balance from './components/Balance';
import Chartbox from './components/Chartbox';
import './styles/App.css';

const json = require('./data.json');

function App() {
  return (
    <div className="App">
      <Balance data={json}/>
      <Chartbox data={json}/>
    </div>
  );
}

export default App;
