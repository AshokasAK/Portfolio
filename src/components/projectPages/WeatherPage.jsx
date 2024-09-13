import React, { useEffect } from 'react'
import {Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";



const WeatherPage = () => {


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

  return (
   <>
    <div className="singlecontainer">
        <div className="singleContent">
            <div className="singlePro">
                <aside> <img src="../public/project/pro1.png" alt="" /></aside>
                <section>
                    <h4 className='proname'>Weather App</h4>
                    <small className='date'>Aug 8 - Aug 10</small>
                    <div className="tools">
                        <h4>Skills : </h4>
                        <small>HTML5, CSS, Javascript, React,Weather API's.</small>
                    </div>
                    <h5>
                        Details:
                    </h5>
                    <p>Weather App, it shows the weather of district.It was an simple Frontend with handling the api calls in a clear way.The project breakdowns,First we wnat to enter the district name ithe search bar,if there is any spelling mistake is detected then it shows the error in a userr friendly manner.So that the user can understand what mistake he has done.If the district matches the actual name then the results will be displayed to the user.
                    </p>
                </section>
            </div>
            <div className="workingtime">
                <span>Outlooks of the Project :</span>
                <aside>
                <img className='weatheric'src='../../../public/projectoutlook/weatherout.png' alt="" />                
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

  <Link to={'/swiggyProject'}>
  <div className="pro4">
        <img src="../public/project/pro4.png" alt="" />
        <div className="covering">
            <p> Aug  20</p>
            <p>Swiggy Clone</p>
             <p style={{
                 color:'rgb(5, 223, 16)'
             }}
             >Finished</p>
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

export default WeatherPage