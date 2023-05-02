import React from "react";
import neon from './assets/neon.jpg'
import { useNavigate } from "react-router";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";


let apiData = "https://jsonplaceholder.typicode.com/todos/"
const Profile = () => {
    let navigate = useNavigate()
    let handleClick = () => {
        navigate('/admin/Details/Iheb Meftah/ 251524')
    
       
    }

    
    let [id, setId] = useState([])
    let [title, setTitle] = useState([])
    let [todoTitles, setTodoTitles]= useState([])
    let [completed, setCompleted] = useState([])
    useEffect(() => {
        async function getStoredData()
        {
            let res = await axios.get(`${apiData}`) 
            let todoTitlesArray = []
            for(let i= 0; i < 10; i++)
            {
                let Todo = res.data[i];
                let TodoTitle = `id: ${Todo.id}  Title:${Todo.title}`;
                // Set the title state to the title of the first todo
                todoTitlesArray.push(TodoTitle)
                
            }
            setTodoTitles(todoTitlesArray)
        }
        getStoredData()
           
    }, [])

    return (
        <div>

 <section>
    <h4>This is a profile Page</h4>
 <img src={neon} title="neon Image" width={200}/> 
 <button onClick={handleClick}>Go To Details</button>
 
</section>
<h1 style={{color:"black"}}>get Api Data with async and Axios</h1>
{todoTitles.map(todoTitle =>
<div key={todoTitle}>{todoTitle}</div>
)  
}

</div>

    )
}

export default Profile




