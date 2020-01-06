import React from 'react';
import './App.scss';
import './github-markdown.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Editor />
      <Previewer />
    </React.Fragment>
  );
}

export default App;
