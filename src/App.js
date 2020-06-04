import React from 'react';
import './App.css';

import './App.css';
import { Link } from 'react-router-dom';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function App() {
  return (
    <div className="main-background">
      {/*Buttons on top left hand side*/}
      <div className="button-group">
          <a className="buttons-images" href="https://www.google.com">
            <i class="material-icons md-dark">description</i>
            <p className="topbutton-text">Resume</p>
          </a>
          <a className="buttons-images" href="https://www.google.com">
            <i class="material-icons md-dark">build_circle</i>
            <p className="topbutton-text">Github</p>
          </a>
      </div>
      <p>
          <p className="big-text">
            <p className="hello-text">Hello! ツ</p>
            <p className="paragraph-text">I'm Tristan Lucero, a Computer Science<br/> undergraduate student who is highly<br/> interested in software engineering.</p>
            <br/>
            <br/>
            <p className="contact-info">Contact info: 979-250-2645 | tristanandrewlucero@gmail.com</p>
          </p>
      </p>
      <div className='experience-panel'>
        <p style={{ fontSize: "25px", fontWeight: "bold" }}>Projects:</p>
        <p className='projects-text'>⚫ Portfolio Website: A simple portfolio website, made with React JS and CSS.
        <img className='project1-img' src="https://i.imgur.com/v0Yy8LF.png"></img>
        <br/>
        <br/> 
            Github  
            <a href="https://github.com/">
            <img border="0" alt="github project 1" src="https://www.freepngimg.com/thumb/github/62620-github-network-icons-computer-graphics-logo-portable.png" width="30" height="30" />
            </a>

        </p>
      </div>
      <p className="footer-text">Tristan Lucero's Portfolio Website - Built with React</p>
    </div>
  );
}

export default App;
