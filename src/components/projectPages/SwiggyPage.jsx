import React, { useEffect } from 'react'
import '../../../css/WhatsAppPage.css'
import {Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";



const SwiggyPage = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

  return (
    <>
     <div className="singlecontainer">
        <div className="singleContent">
            <div className="singlePro">
                <aside> <img src="../public/project/pro4.png" alt="" /></aside>
                <section>
                    <h4 className='proname'>Swiggy Clone</h4>
                    <small className='date'>Aug 11 - Aug 20</small>
                    <div className="tools">
                        <h4>Skills : </h4>
                        <small>HTML5, CSS, Javascript, React, Node.js, Express.js, MongoDB.</small>
                    </div>
                    <h5>
                        Details:
                    </h5>
                    <p>It was a clone of a Swiggy with responsive.It was a Frontend project with small involvement of Backend. The design and the outlook is more look alike swiggy.I added some functionalities to this, like it can view by single item which is done by the api calls.MongoDB for store the datas.With this project you can order a food, you can place the order which was stored in the database
                    </p>
                </section>
            </div>
            <div className="workingtime">
                <span>Outlooks of the Project :</span>
                <aside>
                <img src='../../../public/projectoutlook/swiggyout1.png' alt="" />
                <img src='../../../public/projectoutlook/swiggyout2.png' alt="" />

                
                </aside>
            </div>

            <div className="nxtPro">
            <Link to={'/whatsAppProject'}>
            <div className="pro5 ">
        <img src="../public/project/pro5.png" alt="" />
        <div className="covering">
            <p>Aug  26</p>
             <p> WhatsappClone</p>
             <p style={{
                 color:'red'
                }}> In progress..</p> 
        </div>
    </div>
    </Link>

  <Link to={'/weatherProject'}>
    <div className="pro3">
        <img src="../public/project/pro1.png" alt="" />
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
        <img src="../public/project/pro2.png" alt="" />
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
        <img src="../public/project/pro3.png" alt="" />
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
        </div>

        <Link to={'/'}>
        <span className='spanhome'>
        <b className='home'><FaArrowAltCircleLeft style={{
            marginRight:'10px',
        }}/> Retrun To Home</b>
        </span>
        </Link>
        
        <div className="fill"></div>

    </div>
    </>
  )
}

export default SwiggyPage