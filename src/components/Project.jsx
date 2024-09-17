import React from 'react'
import '../../css/Project.css'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
   <>
   <h3>My Projects :</h3>
   <div className="projects">
  <Link to={'/whatsAppProject'}>
    <div className="pro5 ">
        {/* <img src="../public/project/pro5.png" alt="" /> */}
        <p className="proimg5 pig"></p>
        <div className="covering">
            <p>Aug  26</p>
             <p> WhatsappClone</p>
             <p style={{
                 color:'red'
                }}> In progress..</p> 
        </div>
    </div>
    </Link>

  <Link to={'/swiggyProject'}>
    <div className="pro4">
        {/* <img src="../public/project/pro4.png" alt="" /> */}
        <p className="proimg4 pig"></p>
        <div className="covering">
            <p> Aug  20</p>
            <p>Swiggy Clone</p>
             <p style={{
                color:'rgb(5, 223, 16)'
              }}>Finished</p>
        </div>
    </div>
    </Link>

  <Link to={'/weatherProject'}>
    <div className="pro3">
        {/* <img src="../public/project/pro1.png" alt="" />
         */}
        <p className="proimg1 pig"></p>
        <div className="covering">
            <p>Aug 10</p>
            <p> Weather App</p>
             <p style={{
                color:'rgb(5, 223, 16)'
            }}> Finished</p>
           
        </div>
    </div>
    </Link>

  <Link to={'/simpleformProject'}>
    <div className="pro2">
        {/* <img src="../public/project/pro2.png" alt="" /> */}
        <p className="proimg2 pig"></p>
        <div className="covering">
            <p>Aug 8</p>
            <p>Simple Form</p> 
            <p style={{
                color:'rgb(5, 223, 16)'
             }}> Finished</p>
         </div>
    </div>
    </Link>

  <Link to={'/todolistProject'}>
    <div className="pro1">
        {/* <img src="../public/project/pro3.png" alt="" /> */}
        <p className="proimg3 pig"></p>
        <div className="covering">
            <p>Aug 6</p>
            <p>CRUD TODO List</p>
            <p style={{
             color:'rgb(5, 223, 16)'

             }}> Finished</p>
         </div>
    </div>
    </Link>
   </div>
   </>
  )
}

export default Project