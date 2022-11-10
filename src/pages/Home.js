import React, { Component } from  'react'
import{ CardImg} from "reactstrap";
import homeImage from "../assests/home-image.png"



class Contact extends Component{

    render(){
  
  
      return(
       
        <>
     <div className='image-1'>
              <img  id='image' alt='computer' src={homeImage}/>
              </div>
              <div className='centered'>
              <h2 id='home-title'> Welcome to my Portfolio</h2>
              </div>
         
        </>
      )
    }
  }
  
  
  export default Contact

