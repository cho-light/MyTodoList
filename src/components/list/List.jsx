import React from 'react';

import styled from "styled-components";
import { Link } from 'react-router-dom';

import { deleteTodo, editHandler } from '../../redux/modules/todos';
import {useDispatch, useSelector} from "react-redux";




function List() {
    const dispatch = useDispatch();
    const todoslist = useSelector((state) => state.todos)
    
    const onDeleteHandler = (id) => {
        dispatch(deleteTodo(id))
    //     const newTodos = todos.filter((todo) =>{
    //         return todo.id !== todoId;
    //     });
    //     setTodos(newTodos);
    };

    const onEditHandler = (id) => {
        dispatch(editHandler(id))
    };

    return (
    
        <StList>
            <h2 className='list_title'>Working</h2>
            <StList_wrapper>
                {todoslist.map((idx) => {
                    if(!idx.result) {
                        
                        return (
                            <container key={idx.id}>
                                <StTodoBox>
                                    <StLink to={`/${idx.id}`} key={idx.id}>
                                        <div>상세보기</div>
                                    </StLink>
                                    <StTodoText>
                                        <h2 className='todo_title'>{idx.title}</h2>
                                        <div>{idx.body}</div>
                                    </StTodoText>

                                    <StTodoButtonGroup>
                                        <StTodButton
                                        onClick={() => onDeleteHandler(idx.id)}>
                                            삭제하기
                                        </StTodButton>

                                        <StTodButton
                                        onClick={() => onEditHandler(idx.id)}
                                        >
                                        {idx.result ? "취소" : "완료"}
                                        </StTodButton>
                                        
                                    </StTodoButtonGroup>

                                 </StTodoBox>

                            </container>
                            
                        );
                    } else {
                        return null;
                    }
                })}
            </StList_wrapper>


            <h2 className='list_title'>Done!</h2>
            <StList_wrapper>
                {todoslist.map((idx) => {
                    if(idx.result){
                        return (
                            <container key={idx.id}>
                                <StTodoBox>
                                    <StLink to={`/${idx.id}`} key={idx.id}>
                                        <div>상세보기</div>
                                    </StLink>
                                    <StTodoText>
                                        <h2 className='todo_title'>{idx.title}</h2>
                                        <div>{idx.body}</div>
                                    </StTodoText>

                                    <StTodoButtonGroup>
                                        <StTodButton
                                        onClick={() => onDeleteHandler(idx.id)}>
                                            삭제하기
                                        </StTodButton>

                                        <StTodButton
                                        onClick={() => onEditHandler(idx.id)}
                                        >
                                        {idx.result ? "취소" : "완료"}
                                        </StTodButton>
                                    </StTodoButtonGroup>

                                 </StTodoBox>

                            </container>
                        );
                    } else {
                        return null;
                    }
                })}
            </StList_wrapper>

        </StList>
        
    
    );
  }
  
  export default List;

const StLink = styled(Link)`
text-decoration: none;
color: white;
`;

const StList = styled.div` 
    margin: 10px 20px;    
`
const StList_wrapper = styled.div` 
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

const StTodoBox = styled.div`
background-color: rgb(0, 0, 0, 0.5);
border: 3px solid rgb(206, 205, 205);
border-radius: 15px;
width: 300px;
padding: 20px 0;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
text-align: left;
gap: 30px;
`

const StTodoText = styled.div`
color: #eee;
text-shadow: 4px 2px 2px gray;

display: flex;    
align-items: center;
flex-direction: column;
justify-content: center;

`
const StTodoButtonGroup = styled.div`
gap: 30px;

display: flex;    
align-items: center;
justify-content: center;
`
const StTodButton = styled.div`
color: #eee;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(0, 0, 0, 0.1);

height: 40px;
width: 100px;

border-radius: 3px;
border: none;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;   

&:hover {
transform: scale(1.1);
transition-duration: .1s;
cursor: pointer;
}
`
