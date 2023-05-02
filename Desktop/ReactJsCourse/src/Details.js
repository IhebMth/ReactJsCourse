import { useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Details = () => {
  const { name, id } = useParams();
  let navigate  = useNavigate()
  let handleClick = () => {
  navigate('/admin/Details/profile')
  }

  let [data, setData] = useState([])  
  

useEffect(() => {
  axios.post("https://reqres.in/api/users", {
    "name" : "Iheb",
    "Job" : "Developer"
  })
  .then(res => {console.log(res.data)})
  .catch(err => alert(err))
}, [])
// console.log(res.data)
useEffect(() => {
  axios.get("https://reqres.in/api/users?page=2")
  .then(res => {setData(res.data.data)})
  .catch(err => console.log(err))
}, [])
  return (
    <div>
      <div>
      <h1>Welcome To Details Page</h1>
      <p>Name: {name}</p>
      <p>ID: {id}</p>
      <button onClick={handleClick}>Go To Profile</button>
    </div>
    <p style={{paddingBottom:"40px"}}></p>
    <h2>Axios Library in ReactJs</h2>
    <p style={{paddingBottom:"40px"}}></p>
    { 
      data.map((d,i) => {
        return <p 
        key={i} 
        style={{
        lineHeight:"1.8", 
        fontSize:"19px",
        textIndent:"10px",
        color:"blue",
        }}>{d.email}</p>
      }) 
    }
    <p style={{paddingBottom:"40px"}}></p>
    </div>

    
  );
};

export default Details;