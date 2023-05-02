import React, { useEffect, useRef, useState } from 'react'

const Footer = () => {
    const [hooks, setHooks] = useState("useState()")
    
    const name = useRef()
    const age = useRef()
    const image = useRef()
    //componentDidMount
    
    // useEffect(() => {
    //     setHooks("useEffect")
    //     console.log("Component Did Mount")
    // // when we use empty [] , component Did update won't work
    //  // when we use [value] , component Did update will work  when the value changes
    // },[] )
    
    return (
 <div>
    <h3> Creating a footer component through {hooks} </h3>
    <input type="text" ref={name}/>
    <input type="number" ref={age}/>
    <br />
    <input type="file" multiple ref={image}/>

        <button onClick={()=>console.log(name.current.value, <br/>, age.current.value, <br />, image.current.files)}
        style={{width:"100px", 
        backgroundColor:"green",
         borderRadius:"30px"}}
        >Print</button>
</div>
    )
}

export default Footer