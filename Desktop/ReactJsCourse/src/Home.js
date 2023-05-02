import React, { Component, Fragment } from "react";
import Blog from './Blog.js'
import axios from "axios";



export default class Home extends Component 
{
    state = {
        name : this.props.name,
        age: this.props.age,
        x: 0
    }
    constructor(props){
        super(props)
       
        // console.log("Constructor")
      }
      
    //   componentDidMount() {
        

    //     this.setState ({
    //       x: this.state.x+1
    //     })
    //     localStorage.setItem("Iheb", "023HFGZBI3")
    //   console.log("Component Did mount")  
    //   }

    //   shouldComponentUpdate(nextProp, nextState)
    //   {
    //     if (this.state.x === nextState.x)
    //     {
    //         return false;
    //     }else 
    //     {
    //         console.log("should Component Update")
    //         return true
    //     }
    //   }

    //   componentDidUpdate(prevState, prevProps, snapShot)
    //   {
    //     console.log(prevState)
    //     console.log('component Did update')     
    //   }

    //   componentWillUnmount(){
    //     localStorage.clear()

    //   } 

changeStateHandler = () => {
    this.setState({
        name : 'Iheb',
        age: 25
    })
}

  
changeHandler = () => {
    console.log("Iheb Meftah")
  }
  
   alertHandler = () => {
    alert("Hello Iheb Meftah")
  }

render() {
   
    let {name, age} = this.state
    return (
<Fragment>
  <h2> This is Home Page and my name is {name}</h2>
    <Blog type={age } />
    
<button onClick={this.changeStateHandler}>ChangeState</button>
{/* <button onClick={changeHandler}>Click Me</button> */}
<button onClick ={() =>console.log("Iheb Meftah") }> Click Me</button>
<button onDoubleClick={this.alertHandler}>Double Click Me</button> <br />

<h1>{this.state.x}</h1>
   <button onClick={() => {this.setState({x:this.state.x+1})} }>Increment</button> 
   <button onClick={() => {this.setState({x:this.state.x-1})} }>Decrement</button> 
   <button onClick={() => {this.setState({x:0})} }>Reset</button> 
</Fragment>
    )}

}    

