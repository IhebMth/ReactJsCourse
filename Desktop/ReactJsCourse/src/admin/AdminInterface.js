import { Outlet } from "react-router"
import '../App.css'
import { NavLink } from "react-router-dom"
export default function AdminInterFace() {

    return <div>
        <nav className='Header'>
    <ul>
  <li><NavLink exact='true' to='/admin/Details' activeclassname='acitve'>Details</NavLink></li> 
  <li><NavLink  exact='true' to='/admin/Details/profile' activeclassname='acitve'>Profile</NavLink></li>
  <li><NavLink  exact='true' to='/admin/Tricks' activeclassname='acitve'>Tricks</NavLink></li>

  </ul>
  </nav>
        {/* <Outlet /> */}
     
        <div>Footer</div>
        
    </div>
}