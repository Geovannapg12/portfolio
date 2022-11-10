import React, { Component } from 'react'
import { Link } from "react-router-dom";



class Navbar extends Component {

  render() {


    return (

      <>
     
       <div className='nav'>
          <li>
            <Link to="/" id='link'>Home</Link>
          </li>
          <li>
            <Link to="/About" id='link' >About</Link>
          </li>
          <li>
            <Link to="/Project" id='link'>Projects</Link>
          </li>
          <li>
            <Link to="/Contact"  id='link'>Contact</Link>
          </li>
          
          </div>
         
      </>
    )
  }
}


export default Navbar


