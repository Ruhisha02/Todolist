
import { useState ,useRef,useContext} from 'react'
import { TaskContext } from "./App";

export default function FirstChild ()  {


    const addvalue = useRef(null);

function handleOnClick(){
  const newTask= addvalue.current.value;
  setTask([...tasklist,newTask])
}


  return (<>
    <div>Add Task</div>
    <input type="text"  ref={addvalue} />
    <button onClick={()=>handleOnClick()}>Add Task</button>
    
    
    </>
  )
}
