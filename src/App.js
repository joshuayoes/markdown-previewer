import React from 'react';
import './App.scss';
import Editor from './Editor';
import Previewer from './Previewer';

function App() {
  return (
    <div className="App">
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
