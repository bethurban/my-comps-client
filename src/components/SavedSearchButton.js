import React from 'react';
import { withRouter } from 'react-router-dom';

const SavedSearchButton = withRouter(({ history, getZPID, search }) => (
  <button
    type='button'
    onClick={() => {
      history.push('/')
      getZPID(search)
    }}
  >
    Search for comps
  </button>
))

export default SavedSearchButton;
