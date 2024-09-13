import React from 'react'
import '../../css/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
     <div className="header">
        {/* <ul>
            <li>Themes
                <ul>
            <li><div className="first"></div><div className="second"></div></li>
            <li><div className="first"></div><div className="second"></div></li>
            <li><div className="first"></div><div className="second"></div></li>
                </ul>
            </li>
        </ul> */}
       
           <ul>
      <Link to={'/'}><li>HOME</li></Link>
      <Link to={'/about'}><li>ABOUT</li></Link>
      <Link to={'/skill'}><li>SKILLS</li></Link>
      <Link to={'/achive'}> <li>ACHIVES</li></Link>
      <Link to={'/project'}> <li>PROJECTS</li></Link>
      <Link to={'/contact'}><li>CONTACT</li></Link>
    </ul>
     </div>
    </>
  )
}

export default Header