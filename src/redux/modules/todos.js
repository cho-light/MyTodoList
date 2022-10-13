const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID"
const EDIT_HANDLER = "EDIT_HANDLER";



export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  }
};

export const getTodoById = (payload) => {
  console.log('payload에있는',payload)
  return {
    type: GET_TODO_BY_ID,
    payload: payload,
  }
};

export const editHandler = (payload) => {
  return {
    type: EDIT_HANDLER,
    payload: payload,
  }
};


const initialState = {
    todos : [
        {
        id: 1,
        title: "리액트 공부 어려움",
        body: "리액트 삭제를 공부해봅시다",
        result: false,
      },
    ],//배열 여러개 쌓여가기 때문에 대괄호를 사용
    todo: {
      id: 0,
      title: "",
      body: "",
      reuslt: false,
    },
  };
  
// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((idx)=>idx.id !== action.payload)
      };
      
    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((idx) => {
          return idx.id === action.payload
        }),
      };

    case EDIT_HANDLER:
      return {
        ...state,
        todos: state.todos.map((idx)=> {
          if(idx.id === action.payload) {
            return {
              ...idx,
              result: !idx.result,
            };
          } else {
            return idx;
          }
        })
      };
  
    
    default:
      return state;
  }
};
  
  
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "리액트 공부 어려움",
//       body: "리액트 삭제를 공부해봅시다",
//       result: false,
//     },
//     {
//       id: 2,
//       title: "리액트 공부하기",
//       body: "리액트 기초를 공부해봅시다.",
//       result: true,
//     },
// ]);




  // 모듈파일에서는 리듀서를 export default 한다.
  export default todos;