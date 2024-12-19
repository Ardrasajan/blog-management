import { useState, useEffect } from "react";

// todo =>
export default function LearnLS() {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
  
    const lsTodos = JSON.parse(localStorage.getItem("todos_item")) || [];
    setTodos(lsTodos)
    if (todos.length !== 0) {
        saveToLs()
    }

  }, [todos])

  const handleChanges = (e) => {
    setItem(e.target.value);
  };

  const addItem = () => {
    const exisitingTodos = [...todos]; // spread operator
    exisitingTodos.push(item);
    setTodos(exisitingTodos);
  };

  const saveToLs = () => {
    let convert = JSON.stringify(todos)
    localStorage.setItem('todos_item', convert)
  }

  const displayTodos = todos.map((item, idx) => <p key={idx}> {item} </p>);

  return (
    <>
      <input type="text" onChange={handleChanges} />
      <button onClick={addItem}> Add</button>

      <div> {displayTodos} </div>
    </>
  );
}

//primitive data type => number, string, boolean, => we can store directly
// non-primitive data => convert to json format