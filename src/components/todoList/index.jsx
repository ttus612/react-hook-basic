import React from 'react';
import PropTypes from 'prop-types';


//kiểm tra loại dữ liệu
TodoList.propTypes = {//xác thực đầu vào của 1 component,nó cung cấp một cái nhìn tổng quan cho tất cả các props và loại dữ liệu của nó(Hiểu một cách đơn giản PropTypes là: Giúp chúng ta kiểm tra các kiểu dữ liệu của các props mà component (hoặc container) nhận vào)
    todos: PropTypes.array,//danh sách todos được truyền từ thằng <App /> xuống 
    onTodoClick: PropTypes.func,// hàm khi user click lên bất kì thằng todo nào
};

TodoList.defaultProps = {//kiểu dữ liệu mặc định
    todos: [],//nếu thằng cha không truyền giá trị todos xuống thì nó sẽ nhận giá trị là 1 mảng rỗng
    onTodoClick: null,// còn nếu k có sự kiện nào thì nó sẽ là null
}

function TodoList(props) {
    const {todos, onTodoClick} = props 
    //Oject Destructuring, thằng todos lấy sẽ hận giá trị từ thằng cha(<App />) xuống 

    function handleClick(todo){//gọi lại thằng cha
        if (onTodoClick) {
            onTodoClick(todo)//báo lên thằng cha là App.js là có thằng todo đc click 
        }
    }

    return (
        //render ra danh sách toDoList
        <ul className='todo-list'>  
            {todos.map(todo=>(
                //mỗi lần li đc click nó sẽ gọi lại hàm handleClick và truyền vào cái todo hiện tại
                <li
                    key={todo.id}//phải truyền key là 1 giá trị unit
                    onClick={() => handleClick(todo)}//khi mà đc click thì phải gọi lên thằng từ thằng cha path cuống
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;