

import React, { Component } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';

export default class EditableList extends Component {
  
  render() {
    return (
      <React.Fragment>
      <TextField
                        className='input-field'
                        type='text'
                    />
                    <IconButton aria-label="delete">
  <DeleteIcon />
</IconButton></React.Fragment>
    );
  }
}