import React from 'react'
import '../../css/Summary.css'
import { Link } from 'react-router-dom'

const Summary = () => {
  return (
   <>
   <Link to={'/about'}>
   <div className="summary">
   <h4>Summary : </h4>
   <p>Highly motivated and detail-oriented fresher with a strong foundation in web development, seeking to leverage my skills in HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB to deliver high-quality solutions. Proficient in building dynamic web applications with a solid understanding of front-end and back-end development. Eager to apply my skills and knowledge to contribute to innovative projects and continue growing as a professional.
   </p>
   <h4>Education : </h4>
   <p>Bachelor of Computer Applications <b>(BCA)</b> - 72% ,  J.K.K. Nataraja College of Arts and Science.
   </p>
   <h4>Technical Skills : </h4>
   <p>
   <ol>
    <li>Front-end: HTML, CSS, Bootstrap, JavaScript, React</li>
    <li>Back-end: Node.js, Express.js</li>
    <li>Database: MongoDB</li>
   </ol>
   </p>
   </div>
   </Link>
   </>
  )
}

export default Summary