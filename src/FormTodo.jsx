import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { MdDelete } from "react-icons/md";
import './FormTodo.css'


export default function FormTodo() {
   

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [taskList, setTaskList] = useState([]);

    function onSubmit(data) {

        if (data.tasks !== "") {
            console.log(taskList)
           const taskObj = {
  task: data.tasks,
  isCompleted: false,
};
         
            
const token = localStorage.getItem("token");
console.log("Token being sent:", token);

fetch("http://localhost:4000/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(taskObj),
        })
            .then(response => response.json())
        .then((result) => {
            getTaskList();
                console.log("Task successfully posted to API:", result);
            })
      .catch((error) => {
                console.error("Error posting task:", error);
            });
        }
        




    }
    function handleTaskCompletion(index) {
        let tempTask = [...taskList];

        tempTask[index].isCompleted = !tempTask[index].isCompleted;

        console.log(tempTask)
        setTaskList(tempTask)

         fetch(`http://localhost:4000/task/${tempTask[index].id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify({ isCompleted: tempTask[index].isCompleted }),
    })
    .then(response => response.json())
    .then( updatedTask => {
        console.log("Task completion updated in DB:",  updatedTask);
    })
    .catch(error => {
        console.error("Error updating task in DB:", error);
    });
}

    
   

    useEffect(()=>{

        getTaskList();

    },[])


    function getTaskList()

    {
    const token = localStorage.getItem("token");
console.log("Token being sent:", token);

        fetch("http://localhost:4000/task", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                 "Authorization": `Bearer ${token}`
            }
        })
            .then(response => response.json())
        .then((result) => {
        //   setTaskList(result.tasks);
        setTaskList(Array.isArray(result) ? result : result.tasks || []);
                console.log("Task successfully posted to API:", result);
            })
      .catch((error) => {
                console.error("Error posting task:", error);
            });
        }
         
   function handleDeleteTask(id) {
    fetch(`http://localhost:4000/task/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then((result) => {
                setTaskList(prevList => prevList.filter((task )=> task.id !== id));
                console.log(" successfully deleted", result);
            })
            .catch(error => console.error("Error deleting task:", error));
    }
  


   const TotalTask = taskList.length;
    const completedTask = taskList.filter((task) => task.isCompleted).length;
    const pendingTask = taskList.filter((task )=> !task.isCompleted)      
        
    
  return (
  <>
  
   <div
  className="min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat m-0 p-0"
  style={{
    backgroundImage:
      "url('https://t3.ftcdn.net/jpg/05/13/59/72/360_F_513597277_YYqrogAmgRR9ohwTUnOM784zS9eYUcSk.jpg')",
  }}
>
    <div
      className="max-w-[700px] mx-auto mt-20 p-10 rounded-[25px]
                 bg-[rgba(115,74,51,0.2)] backdrop-blur-[12px]
                 shadow-[0_12px_30px_rgba(0,0,0,0.3)]
                 border border-[rgba(255,255,255,0.397)] text-[#0b0b0b]"
    >
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center text-[32px] font-bold text-[#3f1f0c] mb-6 font-sans">
          TODO LIST
        </h3>

    
        <div
          className="flex flex-wrap gap-4 justify-between mt-8 p-2 rounded-[12px]
                     shadow-[0_4px_10px_rgba(19,14,19,0.08)]"
        >
          <h3 className="flex-1 min-w-[150px] text-center text-[17px] font-semibold p-4 rounded-[10px]
                         text-white bg-gradient-to-br from-[#a74d2cc9] to-[#25180c]
                         hover:scale-105 transition-transform">
            TOTAL TASKS: {TotalTask}
          </h3>
          <h3 className="flex-1 min-w-[150px] text-center text-[17px] font-semibold p-4 rounded-[10px]
                         text-white bg-gradient-to-br from-[#a74d2cc9] to-[#25180c]
                         hover:scale-105 transition-transform">
            COMPLETED TASKS: {completedTask.length}
          </h3>
          <h3 className="flex-1 min-w-[150px] text-center text-[17px] font-semibold p-4 rounded-[10px]
                         text-white bg-gradient-to-br from-[#a74d2cc9] to-[#25180c]
                         hover:scale-105 transition-transform">
            PENDING TASKS: {pendingTask.length}
          </h3>
        </div>

        <div className='flex'>
        <input
          className="w-[65%] p-2 border-2 border-[#4d2717] rounded-[10px] text-[16px] mr-2
                     focus:outline-none focus:border-[#6c3329] transition-colors mt-2"
          type="text"
          placeholder="Type the task here"
          {...register("tasks", { required: "Task is required" })}
        />
        <p>{errors.tasks ? errors.tasks.message : ""}</p>


        <div>
          <button
            className="min-w-[150px] mt-2 text-center text-[17px] font-medium p-2  rounded-[20px]  bg-[#562703] text-white hover:bg-[#e7884d] hover:scale-105  transition-transform cursor-pointer"
            type="submit"
          >
            ADD
          </button>
        </div>
        </div>
      </form>

      
      <h3 className="text-[22px] text-[#48240af1] mt-8 border-b-2 border-dashed border-[#ffd3c2] pb-2">
        ADDED TASKS
      </h3>

    
      <ul className="list-none space-y-3 mt-4">
        {taskList.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 rounded-lg   bg-[#f3e9fc] border border-dashed border-gray-300
                       shadow-sm"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleTaskCompletion(index)}
                className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-400"
              />
              <span
                className={`text-gray-800 ${
                  task.isCompleted ? "line-through text-gray-400" : ""
                }`}
              >
                {task.task}
              </span>
            </div>
            <MdDelete
              className="text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-200"
              onClick={() => handleDeleteTask(task.id)}
              title="Delete Task"
              size={22}
            />
          </li>
        ))}
      </ul>
    </div>
    </div>
  </>
);
}