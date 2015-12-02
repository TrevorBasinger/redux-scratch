import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

console.log ('got here!!!');

var reducer = function (state, action) {
  return state;
}

var store = createStore (reducer);

  CLICK_ACTION = 'CLICK_ACTION',
  clickAction = { type: CLICK_ACTION },

  mkUpdateButton = function (dispatch) {
    return (
      <button onClick={dispatch (clickAction)}>Press Me!
      </button>
    )
  }

  nil = null;

render (<h1>Oh hai</h1>, document.getElementById ('app'));
