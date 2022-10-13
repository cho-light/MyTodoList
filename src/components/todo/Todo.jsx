import React from 'react';
import './style.css';



function Todo({todo, onDeleteHandler, onEditHandler}) {
    return (
        
        <div className="todo_box">
            <div className="todo_text">
                <h2 className='todo_title'>{todo.title}</h2>
                <div>{todo.body}</div>
            </div>

            <div className="todo_buttonGroup">
                <button
                className='todo_button'
                onClick={() => onDeleteHandler(todo.id)}>
                    삭제하기
                </button>

                <button
                className='todo_button'
                onClick={() => onEditHandler(todo.id)}
                >
                {todo.result ? "취소" : "완료"}
                </button>
            </div>

        </div>
        

     
        
    //     <div className="todo-container">
    //   <div>
    //     <h2 className="todo-title">{todo.title}</h2>
    //     <div>{todo.body}</div>
    //   </div>
    //   <div className="button-set">
    //     <button
    //       className="todo-delete-button button"
    //       onClick={() => onDeleteHanlder(todo.id)}
    //     >
    //       삭제하기
    //     </button>
    //     <button
    //       className="todo-complete-button button"
    //       onClick={() => onEditHandler(todo.id)}
    //     >
    //       {todo.isDone ? "취소" : "완료"}
    //     </button>
    //   </div>
    // </div>
    );
  }
  
  export default Todo;