import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"
import Condition from "../Condition"
import '../App.css'

export default function VisitorsInterface() {

    return <div>
       
        <nav className='Header'>
    <ul>     
  <li><NavLink exact='true' to="/" activeclassname='acitve'>Home</NavLink></li>
  <li><NavLink  exact='true' to='/Condition' activeclassname='acitve'>Condition</NavLink></li>
  <li><NavLink exact='true' to='/Calculatrice' activeclassname='active'>Calculatrice</NavLink></li>
  <li><NavLink exact='true' to='/ToDoList' activeclassname="active">ToDoList </NavLink></li>
  <li><NavLink exact='true' to='/Weather' activeclassname="active">Weather </NavLink></li>
  </ul>
  </nav>
        <Outlet />
        {/* <Condition /> */}
    </div>
}