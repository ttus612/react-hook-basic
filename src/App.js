import logo from './logo.svg';
import './App.scss';
import ColorBox from './components/ColorBox';
import { useState } from 'react';
import TodoList from './components/todoList';
import TodoForm from './components/ToDoForm';

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

  function handleToDoFormSubmit(formValues) {
    console.log('Form submit: ', formValues)
    const newToDo = {
      id :toDoList.length + 1,
      ...formValues,
    }
    const newToDoList = [...toDoList]
    newToDoList.push(newToDo)
    setToDoList(newToDoList)
  }

  return (
    <div className="app">
      <h1>React Hook toDoList</h1>
      <TodoForm onSubmit={handleToDoFormSubmit} />
      <TodoList todos= {toDoList} onTodoClick= {handleTodoClick} />
    </div>
  );
  /**
   * TodoList:
   * -khi render nó sẽ truyền thằng toDoList(là thằng mảng mà ta cần render xuóng trên useStates()) xuống thằng props là toDo để có dữ liệu qua bên kia làm việc
   * -Khi 1 ông nào đó trong <TodoList /> đc click nó sẽ báo lên thằng <App /> biết để gọi hàm, khi hàm được gọi và thực hiện công việc của hàm đó
   */
  
}

export default App;
