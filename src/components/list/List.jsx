import React, {useState} from 'react';
import Todo from '../todo/Todo';
import './style.css';

function List({setTodos, todos}) {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "리액트 공부 어려움",
//       body: "리액트 삭제를 공부해봅시다",
//       isDone: false,
//     },
//     {
//       id: 2,
//       title: "리액트 공부하기",
//       body: "리액트 기초를 공부해봅시다.",
//       isDone: true,
//     },
// ]);

    // const [todo, setTodo] = useState([
    //     {
    //      id: 1,
    //      title: "a",
    //      body: "a", 
    //      result: false
    //     },
    //     {
    //     id: 2,
    //     title: "a",
    //     body: "a", 
    //     result: true
    //     },
    // ])

    // const onDeleteHandler = (todoId) => {
    //     const newTodo = todo.filter((idx) => {
    //         return idx.id !== todoId;
    //     })
    //     setTodo(newTodo);
    // };

    // const onEditHandler = (todoId) => {
    //     const newTodo = todo.map((idx) => {
    //         if(idx.id === todoId) {
    //             return {
    //                 ...idx,
    //                 result: !idx.result
    //             }
    //         } else {
    //             return {...idx};
    //         }
    //     });
    //     setTodo(newTodo);
    // }


    
    const onDeleteHandler = (todoId) => {
        const newTodos = todos.filter((todo) =>{
            return todo.id !== todoId;
        });
        setTodos(newTodos);
    };

    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === todoId) {
                return {
                ...todo,
                result: !todo.result,
                };
            } else {
                return {...todo};
            }
        });

        setTodos(newTodos);
    }

    return (
    
        <div className="List">
            <h2 className='list_title'>Working</h2>
            <div className="list_wrapper">
                {todos.map((idx) => {
                    if(!idx.result) {
                        return (
                            <Todo
                            todo={idx}
                            key={idx.id}
                            setTodo={setTodos}
                            onDeleteHandler={onDeleteHandler}
                            onEditHandler={onEditHandler}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>


            <h2 className='list_title'>Done!</h2>
            <div className="list_wrapper">
                {todos.map((idx) => {
                    if(idx.result){
                        return (
                            <Todo
                            todo={idx}
                            key={idx.id}
                            setTodo={setTodos}
                            onDeleteHandler={onDeleteHandler}
                            onEditHandler={onEditHandler}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>

        </div>
        
    
    );
  }
  
  export default List;