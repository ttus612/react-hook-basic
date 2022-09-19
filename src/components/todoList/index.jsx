import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {//xác thực đầu vào của 1 component,nó cung cấp một cái nhìn tổng quan cho tất cả các props và loại dữ liệu của nó(Hiểu một cách đơn giản PropTypes là: Giúp chúng ta kiểm tra các kiểu dữ liệu của các props mà component (hoặc container) nhận vào)
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {//kiểu dữ liệu mặc định
    todos: [],
    onTodoClick: null,
}

function TodoList(props) {
    const {todos, onTodoClick} = props //Oject Destructuring

    function handleClick(todo){
        if (onTodoClick) {
            onTodoClick(todo)//báo lên thằng cha là App.js
        }
    }

    return (
        //render ra danh sách toDoList
        <ul className='todo-list'>  
            {todos.map(todo=>(
                //mỗi lần li đc click nó sẽ gọi lại hàm handleClick và truyền vào cái todo hiện tại
                <li
                    key={todo.id}//phải truyền key là 1 giá trị unit
                    onClick={() => handleClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;