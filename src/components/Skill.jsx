import React from 'react'
import '../../css/Skill.css'
import { Link } from 'react-router-dom'


const Skill = () => {
  return (
    <>
    <Link to={'/skill'}>
        <h3
        style={{
          fontSize:'28px',
          display:'flex',
          justifyContent:'center',
          marginTop:'4.5rem',
          color:'black',
          fontWeight:'700'
        }}
        >Skills I have learned</h3>
    <ul className='skills'>
        <li className='pl'>
            <b>Programming Language</b>
            
        <span className='html'> </span>
        <span className='css'> </span>
        <span className='js'> </span>
        </li>
        <li className='fw'>
        <b>Frameworks</b>

        <span className='bootstrap'> </span>
        <span className='react'> </span>
        <span className='express'> </span>
        
        </li>
        <div className="same">

        <li className="env">
        <b>Runtime Environments</b>
        <span className='node'> </span>
        </li>
        <li className='db'>
        <b
        style={{
            position:'absolute',
            left:'60px'
        }}
        >Database</b>
        <span className='mongodb'> </span>
        </li>
        </div>

    </ul>
    </Link>
    </>
  )
}

export default Skill