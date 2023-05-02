import { hover } from "@testing-library/user-event/dist/hover";
import React, { Component, Fragment } from "react";

class Forms extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: undefined,   
            real: undefined,
            barc: undefined,
            country: ''
            }
        

    }
     
     onChangeHandler = (e) => {
      
        // e.preventDefault()
        this.setState({
            name: e.target.value,
                       
     })
    }

    handleRadio = (e) => {
        console.log(e.target.value)
    }

    onCheck = (e) => {
        if((e.target.name === 'real') && (e.target.checked == true))
        {
        this.setState({
            real: "Real Madrid"
        })
    }

    if((e.target.name === 'real') && (e.target.checked == false))
        {
        this.setState({
            real: undefined
        })
    }

    if((e.target.name === 'barc') && (e.target.checked == true))
        {
        this.setState({
            barc: "Barcelona"
        })
    }

    if((e.target.name === 'barc') && (e.target.checked == false))
        {
        this.setState({
            barc: undefined
        })
    }
    }

    changeCountry = (e) => {
        this.setState({
            country: e.target.value
        })
    }
    render() {
       
        return(
            <Fragment>
            <input type="text" placeholder="Enter your name" onChange={this.onChangeHandler} /> 
            <h1> {this.state.name}</h1>
             
             Men: <input type="radio" name="gender" value='M' onChange={this.handleRadio} />
             Women: <input type="radio" name="gender" value='W'  onChange={this.handleRadio}/> <br/>

             Real Madrid: <input type="checkBox" name="real" onChange={this.onCheck}/>
             Barcelona: <input type="checkBox" name="barc" onChange={this.onCheck} />  {this.state.real} {this.state.barc}

            <h1> Who will win the Champions League 2023?</h1>

             <select onChange={this.changeCountry} value={this.state.country}>
             <option value='' disabled>Country</option>
             <option value='Real Madrid'>Real Madrid</option>
             <option value='Bayen Munchen'>Bayen Munchen</option>
             <option value='Napoli'>Napoli</option>
             <option value='Milan'>Milan</option>
             </select>
             </Fragment>
        )
    }
}

export default Forms