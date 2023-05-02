
import React, { Component, Fragment } from 'react';
import Footer  from './Footer';
import Home from './Home';
import Condition from './Condition'  
import Tricks from './TricksCss'
import Details from './Details';
import Profile from './Profile'
import VisitorsInterface from './visitors/visitorsInterface'
import AdminInterFace from './admin/AdminInterface';
import {Routes, Route, NavLink } from 'react-router-dom';
import Calculatrice from './calculatrice/Calculatrice';
import ToDoForm from './toDoList/ToDoList';
import GoBack from './GoBack';
import ToDoList from './toDoList/ToDoList';
import Weather from './weather/Weather';
import './App.css';

export default function App() {




return (
  <Fragment>
    
<nav className='Header'>
  <ul>
  <li><NavLink exact='true' to="/" activeclassname="active">Go Back</NavLink></li>
    <li><NavLink exact='true' to='/admin'>Admin </NavLink></li>
    <li><NavLink exact='true' to='/'>Visitor </NavLink></li>
  </ul>
</nav>
  {/* <nav className='Header'>
    <ul>
  <li><NavLink exact='true' to="/" activeclassname='acitve'>Home</NavLink></li>
  <li><NavLink  exact='true' to='/Condition' activeclassname='acitve'>Condition</NavLink></li>
  <li><NavLink  exact='true' to='/Tricks' activeclassname='acitve'>Tricks</NavLink></li>
  <li><NavLink exact='true' to='/Details' activeclassname='acitve'>Details</NavLink></li> 
  <li><NavLink  exact='true' to='/Details/profile' activeclassname='acitve'>Profile</NavLink></li>
  <li><NavLink exact='true' to='/Footer' activeclassname='active'>Footer</NavLink></li>
  </ul>
  </nav> */}

  <Routes>   
    <Route path='/' element={<VisitorsInterface />}>
    <Route exact='true' Component={GoBack}/>
    <Route index Component={Home} />
    <Route exact path="/Condition" Component={Condition} />
    <Route path="/Footer"  Component={Footer}/>
    <Route path="/Calculatrice"  Component={Calculatrice}/>
    <Route path="/Weather"  Component={Weather}/>
  
  </Route>

  <Route exact='true' path='/' Component={GoBack}/>   
  <Route path='/toDoList' Component={ToDoList} />
  
  
  
  <Route path='/admin' element={<AdminInterFace/>}>
  <Route exact='true' Component={GoBack}/> 
  <Route index Component={Details} />
  <Route exact path="/admin/Details"  Component={Details}/>
  <Route path="/admin/Details/:name/:id/*" Component={Details} />
  <Route path="/admin/Details/profile" Component={Profile} />
  <Route  path="/admin/Footer"  Component={Footer}/>
  <Route  exact path="/admin/Tricks" Component={Tricks} />

  
  </Route>
  
  </Routes>
  
    </Fragment>

//  <Fragment> 
//  <Tricks />
// <Condition />
// <Home name="Iheb Meftah" age = '24'/>
// <Footer /> 

// </Fragment>
  )
}


