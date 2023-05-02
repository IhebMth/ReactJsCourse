import React, { Component, Fragment } from "react";
import Forms from './Forms'

class Tricks extends Component
{
    state = 
    {
        className : '',
        style: {
            marginTop : '5%',
            color: 'green'
        }
    }

 handleColorRed = (e) => {
    e.preventDefault();
    this.setState({
      className : 'red'  
    })
 }

 handleColorBlue= (e) => {
    e.preventDefault();
    this.setState({
      className : 'blue'  
    })
 }

render(){
    return (
        <Fragment >
            <h1 style={this.state.style}>Welcome To react Js Course</h1>
            <h1 className={this.state.className}>Welcome To react Js Course</h1>
        <button onClick={this.handleColorRed}> Click Me for red</button>
        <button onClick={this.handleColorBlue}> Click Me for Blue </button> <br/> <br/>
        <Forms />
        </Fragment> 
    )
}
}
export default Tricks