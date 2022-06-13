import React, {useEffect, useState} from 'react'

export default function Task(data) {
    const [state, setState] = useState(null);
    useEffect(()=>{
        setState(data.data.done)
    }, [data])
    const onChange = (id) => {
        const list = JSON.parse(localStorage.getItem('tasks'));
        list.map(item => (
                item.id == id ? item.done = !item.done : {}
            ))
        localStorage.setItem('tasks', JSON.stringify(list));
        }
  return (
    <div className='task'>
        {state
            ? <svg onClick={()=>{onChange(data.data.id); setState(!state)}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path style={{color: 'green'}}d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
            : <svg onClick={()=>{onChange(data.data.id); setState(!state)}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>
        }
        
        <span>{data.data.name}</span>
    </div>
  )
}
