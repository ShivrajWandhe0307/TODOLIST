
import { useState } from 'react';
import './App.css';

function App() {
  let [todoList, setTodoList] = useState([])


  let saveToDoList = (event) => {
    let toname = event.target.toname.value
    if (!todoList.includes(toname)) {
      let finalTodoList = [...todoList, toname]
      setTodoList(finalTodoList)

    }
    else {
      alert("ToDo Name Already Exists")
    }

    event.preventDefault();
  }

  let list=todoList.map((value,index)=>{
    return(
      <TodoListItem value={value} key={index} indexNumber={index} todoList={todoList} setTodoList={setTodoList}/>
    )
  })

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='toname' />
        <button>Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function TodoListItem({value,indexNumber,todoList,setTodoList})
{ let [status,setStatus]=useState(false)
  let deleteRow=()=>
  {
    let finlData=todoList.filter((v,i)=>i!==indexNumber)
    setTodoList(finlData)
  }

  let checkStatus=()=>{
    setStatus(!status)
  }
  return(
    <li className={status?'comple':''} onClick={checkStatus}>{indexNumber+1}   .{value} <span onClick={deleteRow}>&times;</span></li>
  )
}
