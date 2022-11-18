import React, { Component } from 'react'
import { SiJavascript, SiRubyonrails  } from "react-icons/si";
import { BiGitBranch } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';
import { TiHtml5 } from 'react-icons/ti';

import Geo from "../assests/geo-headshot.jpg"



class About extends Component{

    render(){
  
  
      return(
    
        <>
        <div id='about'>
          <div id='about-container'>
            <div id='about-body'>
              <h2 id='title'> About Me</h2>
              <p>San Diego based Junior Full Stack Web Developer eager to learn with strong attention to detail and passionate about clean and concise code to support accessible user experiences. I started my journey as a developer in 2022 and I am enthusiastic to keep learning and keep building my skills.</p>
              {/* <h2 className='skill-stack'>Skill Stack</h2> */}
            </div>
            <div id='future-image'>
              <img id='pic-of-me' alt='Geo Perez' src={Geo}/>

            </div>
          </div>
        </div>
      {/* <div className='s-stack'> */}
        <div className='container'>
        <h2 className='skill-stack'>Skill Stack</h2>
        <div id='ss-body'>
          <div id='lang-container'>


            <div id='languages'>
        <div className='logo'>
          <SiJavascript id='icons'/>
          <label>SiJavascript</label>
        </div>

        <div className='logo'>
            <BiGitBranch id='icons'/>
            <label> Git</label>
        </div>

        <div className='logo'>
            <FaReact id='icons'/>
            <label> React</label>
        </div>

        <div className='logo'>
            <DiRuby id='icons'/>
            <label> Ruby</label>
        </div>

        <div className='logo'/>
        <SiRubyonrails id='icons'/>
        <label> Ruby on Rails</label>
        </div>
            
            <div className='logo'>
                <TiHtml5 id='icons'/>
                <label> HTML</label>

            </div>


          </div>
          
        </div>
        </div>
      {/* </div>   */}
        </>
      )
    }
  }
  
  
  export default About


