import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import EditableList from './EditableList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div><EditableList /></div>
      <TextField className="decision-name" label="Name your decision..." />
      </div>
  
  );
}
export default App;