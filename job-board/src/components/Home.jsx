import React from 'react'
// import { Link } from 'react-router-dom';
import '../css/Home.css';


const Home = () => {
  return (
    <div id="app-root">
      <div className="content">
      <header>
        
        <h1>DUTY QUEST</h1>
        <div className="container">
          <h4>Join now to be on a quest for your dream job!</h4>
          <br />
          <br />
          <a className="btn btn-info" href="/Login" role="button">
            Login
          </a>&nbsp;&nbsp;
          <a className="btn btn-info" href="/Signup" role="button">
            Signup
          </a>
          <br />
          <br />
          <p>Below are a few featured job listings to start off with👇</p>
        </div>
        <ul type="none">
          <li>Full Stack Web Developer</li>
          <li>Machine Learning Engineer</li>
          <li>Data Scientist</li>
          <li>DevOps Engineer</li>
          <li>Software Developer</li>
          <li>Database Administrator</li>
          <li>Cybersecurity Engineer</li>
          <li>Blockchain Engineer</li>
          <li>Product Manager</li>
          <br />
          <li>and many many more...</li>
        </ul>
      </header>
      </div>
    </div>
  )
}

export default Home
