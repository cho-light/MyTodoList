import React,{ useState } from 'react';
import './style.css';

// let number = 3;  //이렇게 사용하면 오류날수있음

function Form({setTodos, todos}) {
    const initialState = {
        id: 0,
        title: "",
        body: "",
        isDone: false,
    };

    const[todo, setTodo] = useState(initialState);

    const number = React.useRef(2) //ref 추후에 배우게됨

    const onChageHandler = (event) => {
        const {name, value} = event.target;
        setTodo({...todo, [name]:value});
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(todo.title.trim() === "" || todo.body.trim() === "") return;
        setTodos([...todos, {...todo, id:number.current}]);
        setTodo(initialState);
        number.current += 1;
      }; // const number = React.useRef(2)와 id:number.current 를 사용해서
      // 추가할때마다 id값에 +1이 됨. 각 생성된 박스마다 다른 id값을 가짐.
      
      
      //setTodos를 즉 id 1, 2 객체를 다 가져오고 그다음 뒤에 새로 작성된 todo를 불러오고 id는 3인 number로 넣어준다.
      // 그다음 다시 initialState인 초기값으로 넣어주고
      // 넘버를 3 다음인 4로 바꿔준다.  다음 추가된 todo id는 자동으로 4가 된다.


      //form은 폼안에 내용을 어디론가 보낼때 onSubmit이라는 속성값을 사용
      //찾아볼것 action등등

    return (
      <form onSubmit={onSubmitHandler} className="Form">
        <div className="input_group">
            <label className='Form_content'>제목</label>
            <input
            type="text"
            name="title"
            value={todo.title}
            className='content_input'
            onChange={onChageHandler}
            />

            <label className='Form_content'>내용</label>
            <input
            type="text"
            name="body"
            value={todo.body}
            className='content_input'
            onChange={onChageHandler}
            />
        </div>
        <button className='add_button'>추가하기</button> 
      </form> 
    );
  }
//input에 있는 value 값을 onChangeHandler 할것이다.

  export default Form;