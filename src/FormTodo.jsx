import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import './FormTodo.css'

export default function FormTodo() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [taskList, setTaskList] = useState([]);

    function onSubmit(data) {
        if (data.tasks !== "") {
            console.log(taskList)
            const taskObj = {
                title: data.tasks,
                completed: false,
            }
            setTaskList([...taskList, taskObj]);

        }
    }
    function handleTaskCompletion(index) {
        let tempTask = [...taskList];

        tempTask[index].completed = !tempTask[index].completed;

        console.log(tempTask)
        setTaskList(tempTask)

    }
    const TotalTask = taskList.length;
    const completedTask = taskList.filter(task => task.completed)
    const pendingTask = taskList.filter(task => !task.completed)
    return (

        <>
            <div className='todo-container'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <h3 className="todo-title"> TODO LIST</h3>
                    <div className='task-detail'>
                    <h3 className='Total-task'>TOATAL TASKS:{TotalTask}</h3>
                    <h3 className='Completed-task'>COMPLETED TASKS:{completedTask.length}</h3>
                    <h3 className='Pending-task'>PENDING TASKS:{pendingTask.length}</h3>
</div>


                    <input className="todo-input" type='text' placeholder='Type the task here' {...register("tasks", { required: "Task is required" })} />
                    <p>{errors.tasks ? errors.tasks.message : ""}</p>
                    <button className="todo-button" type='submit' >ADD</button>

                </form>
                <section>

                    <h3 className="todo-subtitle">ADDED TASKS</h3>

                    <ul >

                        {
                            taskList.map((task, index) => {
                                return (<li key={index}>
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => handleTaskCompletion(index)}
                                    />
                                    <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                                    {task.title}</span></li>)

                            })
                        }



                    </ul>

                </section>

            </div>
        </>
    )
}