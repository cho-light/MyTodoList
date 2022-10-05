import React, {useState} from "react";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

const TodoList = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부 어려움",
      body: "리액트 삭제를 공부해봅시다",
      result: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      result: true,
    },
]);


  return (

    <Layout>
       <Header/>
       <Form todos={todos} setTodos={setTodos} />
       <List todos={todos} setTodos={setTodos} />
    </Layout>
  
  );
}

export default TodoList;