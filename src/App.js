import "./App.css";
import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setCotent] = useState("");
  const [todos, SetTodos] = useState([]);

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const contentChange = (event) => {
    setCotent(event.target.value);
  };

  const addClick = () => {
    SetTodos([
      ...todos,
      {
        title,
        content,
        isDone: false,
      },
    ]);
    setTitle("");
    setCotent("");
  };

  const deleteClick = (index) => {
    const newWork = todos.filter((work) => work !== todos[index]);
    SetTodos(newWork);
  };

  const changeClick = (index) => {
    todos[index].isDone = !todos[index].isDone;
    SetTodos([...todos]);
  };

  return (
    <div>
      <div>
        <input value={title} onChange={titleChange} placeholder="제목"></input>
        <input
          value={content}
          onChange={contentChange}
          placeholder="내용"
        ></input>
        <button onClick={addClick}>생성</button>
      </div>
      <div>
        할일목록
        <div className="box">
          {todos
            .filter((todo) => todo.isDone === false)
            .map((todo, index) => (
              <div lassName="box">
                <div>제목{todo.title}</div>
                <div>내용{todo.content}</div>
                <button onClick={() => deleteClick(index)}>삭제</button>
                <button onClick={() => changeClick(index)}>완료</button>
              </div>
            ))}
        </div>
      </div>
      <div>
        완료목록
        <div className="box">
          {todos
            .filter((todo) => todo.isDone === true)
            .map((todo, index) => (
              <div>
                <div>제목{todo.title}</div>
                <div>내용{todo.content}</div>
                <button onClick={() => deleteClick(index)}>삭제</button>
                <button onClick={() => changeClick(index)}>취소</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
