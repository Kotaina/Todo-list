import React from 'react';
import './App.css';
import toDoItem from './toDoItem.js';
import toDoData from './toDoData';

class App extends Comment {

  constructor() {
    super();
    this.state = {
      toDoItems: toDoData
    }
  }
  handleChange = id => {
    const index = this.state.toDoItems.map(item => item.id).indexOf(id);
    this.setState(state => {
      let { toDoItems } = state;
      toDoItems[index].completed = true;
      return toDoItems;
    })
  }
  render() {
    const { toDoItems } = this.state;
    const activeTasks = toDoItems.filter(task => task.completed === false);
    const completedTasks = toDoItems.filter(task => task.completed === true);
    const finalTasks = [...activeTasks, ...completedTasks].map(item => {
      return (
        <toDoItem
          key={item.id}
          description={item.description}
          completed={item}
        />
      )
    })
  }
}

export default App;
