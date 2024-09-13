import React, { useEffect } from 'react'
import Certificate from './Certificate'
import Header from './Header'
import Name from './Name'
import Project from './Project'
import Skill from './Skill'
import Contact from './Contact'
import Summary from './Summary'


const Home = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
},[])
  return (
    <>
    
       
         <Name/>
        
        {/* <Skill/>

        <Summary/>
        
        <Certificate/>
        
        <Project/>

        <Contact/> */}
    </>
  )
}

export default Home