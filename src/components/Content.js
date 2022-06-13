import React, {useEffect, useState} from 'react'
import Task from './Task'

export default function Content() {
    const [tasks, setTasks] = useState();
    const [list, setList] = useState();
    const [filt, setFilt] = useState("all");
    const addTask = () => {
        const list = JSON.parse(localStorage.getItem('tasks'));
        const taskName = prompt('Вводите название задания!');
        if(list){
            list.push({id: Math.random().toString(16), name: taskName, done: false});
            setTasks(list)
        }
        else{
            setTasks([{id: Math.random().toString(16), name: taskName, done: false}])
        }
    }
    useEffect(()=>{
        tasks && localStorage.setItem('tasks', JSON.stringify(tasks));
        setList(JSON.parse(localStorage.getItem("tasks")));
    }, [tasks, filt]);
    const completed = () => (
        list?.filter(item => item.done == true)
    )
    const uncompleted = () => (
        list?.filter(item => item.done == false)
    )
    console.log(document.body.clientHeight * 0.6)
    
  return (
    <div className='content'>
        <h2>{filt == 'all' ? "It's time get it done" : filt == 'completed' ? "completed" : 'active'}!</h2>
        <div style={{maxHeight: document.body.clientHeight * 0.6}} className='tasks'>
            {filt == "all" ? list?.map((item, i) => (
                    <Task key={i} data={item} />
                    ))
                : filt == 'completed' ? completed().map((item, i) => (
                        <Task key={i} data={item} />
                        )) : uncompleted().map((item, i) => (
                        <Task key={i} data={item} />
                        ))  
            }
        </div>
        <div className='footer'>
            <button className='btn btn-success' onClick={()=>setFilt('all')}>All tasks</button>
            <button className='btn btn-danger' onClick={()=>setFilt("uncompleted")}>Active</button>
            <button className='btn btn-info' onClick={()=>setFilt("completed")}>Completed</button>
            <button className='btn btn-warning' onClick={()=>addTask()}>Add Task</button>
        </div>
    </div>
  )
}
