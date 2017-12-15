import React from 'react';
import { Provider } from 'react-redux'

import Todo from './app'
import configureStore from '../redux/store'

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }]
}

let store = configureStore(initialState)

export default class home extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>)
  }
}