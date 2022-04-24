import logo from '../logo.svg';
import './App.css';
import React, { useState } from 'react';
import { ToolTip, ImagesList } from './ToolTip';

function App() {
  const [state, setState] = useState('All');

  return (
    <div className="content">
      <ToolTip state={state} setState={setState} />
      <ImagesList  state={state} />
    </div>
  );
}

export default App;
