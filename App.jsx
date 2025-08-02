import { useState } from 'react'

import './App.css'

import  Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
function App() {
  const[todos,setTodo]=useState([]);
  const[text,setText]=useState('');
   const [editIndex, setEditIndex] = useState(null); 
  const [editText, setEditText] = useState('');
  const todoChange=(e)=>{
    setText(e.target.value)
  }
  const addTodo=()=>{
    if(text.trim()===''){
      return;}
    const todoItem={
      todo_text:text,
      setText:false
      }
      setTodo([...todos,todoItem]);
      setText('')
  }
  const deleteTodo=(index)=>{
    const todoCopy=[...todos];
    todoCopy.splice(index,1);
    setTodo(todoCopy)
     if (editIndex === index) {
      setEditIndex(null);
      setEditText('');
    }
    
  }
  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index].todo_text);

  
  }
  const saveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex].todo_text = editText.trim();
    setTodo(updatedTodos);
    setEditIndex(null);
    setEditText('');

  }
  return(

    <div><div>
      <Navbar  expand="lg" className="bg-dark navbar-dark" >
        <Container> <Navbar.Brand href="#">Todo</Navbar.Brand></Container>
      </Navbar></div>
    <div className="container-fluid mt-4">
      {/* <h3>TODO APP</h3> */}
      <input type="text" placeholder='Enter the to do' value={text} onChange={todoChange} className="form-control d-inline w-75"/>

      <Button  className="btn btn-primary ms-2" onClick={addTodo}>Add</Button>
    </div>
    <ul className="mt-4 list-group">
      {todos.map((todo,index)=>(
      <li
            key={index.toString()}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="form-control me-2"
                />
                <Button className="btn btn-success btn-sm me-2" onClick={saveEdit}>
                  Save
                </Button>
              </>
            ) : (
              <>
                <span>{todo.todo_text}</span>
                <div>
                  <Button className="btn btn-warning btn-sm me-2" onClick={() => startEdit(index)}>
                    Edit
                  </Button>
                  <Button className="btn btn-danger btn-sm" onClick={() => deleteTodo(index)}>
                    Delete
                  </Button>
                </div>
              </>
            )}
          </li>)

      )}
      
    </ul>
    </div>
  )
}

export default App
