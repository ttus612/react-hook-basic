import logo from './logo.svg';
import './App.scss';
import ColorBox from './components/ColorBox';
import { useState } from 'react';
import TodoList from './components/todoList';

function App() {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: 'I love Easy Fontend !😊'},
    { id: 2, title: 'We love Easy Fontend ! 😍'},
    { id: 3, title: 'They love Easy Fontend! 😘'}
  ]);

  function handleTodoClick(todo) {
    console.log(todo)
    const index = toDoList.findIndex(x => x.id === todo.id)//tìm vị trí index và remove nó ra
    if (index < 0) {
      return
    }else{
      const newToDoList = [...toDoList];
      newToDoList.splice(index, 1)
      setToDoList(newToDoList)
    }
  }

  return (
    <div className="app">
      <h1>React Hook toDoList</h1>
      <TodoList todos= {toDoList} onTodoClick= {handleTodoClick} />
    </div>
  );
}

export default App;
