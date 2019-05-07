import React from 'react';
import { withRouter } from 'react-router-dom';
import '../containers/Button.css';

const SavedSearchButton = withRouter(({ history, getZPID, search }) => (
  <button
    type='button'
    className='myButton'
    onClick={() => {
      history.push('/')
      getZPID(search)
    }}
  >
    Search for comps
  </button>
))

export default SavedSearchButton;
