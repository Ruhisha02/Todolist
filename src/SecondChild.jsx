
import React, { useContext ,useEffect} from 'react';
import { TaskContext } from './App';

export default function SecondChild  () {

       

  return (<>
  
    <div>added task </div>

    <ul>
      {todoList.map((task,index)=>{
       return ( <li key={index}>{task}</li>)
      })
      }
      
    </ul>
</>
  )
}
