import React, { Component } from 'react'
import TodoInput from '../TodoInput/index'
import TodoList from '../TodoList/index'
import { connect } from 'react-redux'

class Todo extends Component {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoInput dispatch={this.props.dispatch}/>
        <TodoList todos={this.props.todos}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Todo)