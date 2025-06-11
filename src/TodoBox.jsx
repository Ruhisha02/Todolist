

// import { useState } from "react";
// export default function TodoBox() {
//   const [taskList, setTask] = useState([]);
//   const [textValue, setTextValue]=useState("");
//   function handleAddClick() {
//     if (textValue !== "") {
//       console.log(taskList)
//       setTask([...taskList,textValue]);
//     }
//   }


//   return (
//     <>
//       <div>
//         <h1>TODO LIST</h1>
//         <input style={{ padding: '8px 16px' }}
//           type="text"
//           placeholder="Type your task here"
//            value= {textValue}
//            onChange={e => setTextValue(e.target.value)}
//         ></input>

//         <button onClick={handleAddClick} style={{ padding: '8px 16px ' }}> Add
//         </button>
//         <h1>Added task</h1>
//         <ul>
//           {
//             taskList.map((task,index) => {
//               return <li key={index}>{task}</li>
//             })
//           }
//         </ul>
//       </div>
//     </>

//   )
// }


import { useState } from "react";
import  './TodoBox.css'
export default function TodoBox() {
  const [taskList, setTask] = useState([]);
  const [textValue, setTextValue] = useState("");
  function handleAddClick() {
    if (textValue !== "") {
      console.log(taskList)
      const taskObj = {
        title: textValue,
        completed: false,
      }
      setTask([...taskList, taskObj]);

    }
  }

  function handleTaskCompletion(index) {
    let tempTask = [...taskList];

    tempTask[index].completed = !tempTask[index].completed;
    
    console.log(tempTask)
    setTask(tempTask)

  }



  return (
    <>
    <div className="todo-container">
      <h1 className="todo-title"> TODO LIST</h1>
           <input
        className="todo-input"
        type="text"
        placeholder="Type your task here"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />

      <button onClick={handleAddClick} className="todo-button">
         Add
      </button>

      <h2 className="todo-subtitle"> Added Tasks</h2>

      <ul className="todo-list">
        {taskList.map((task, index) => (
          <li
            key={index}
            className={`todo-item `}
          >
            <span>{task.title}</span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskCompletion(index)}
            />
          </li>
        ))}
      </ul>
      </div>
    </>

  )
}