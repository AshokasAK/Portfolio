import React, { useEffect } from 'react'
import {Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";


const SimpleFormPage = () => {


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

  return (
   <>
   <div className="singlecontainer">
        <div className="singleContent">
            <div className="singlePro">
                <aside>
                     {/* <img src="../public/project/pro2.png" alt="" /> */}
                     <div className="proimgsi2"></div>
                </aside>
                <section>
                    <a href="https://github.com/AshokasAK/Userf-orm.git">
                    <h4 className='proname'>Simple Form <span>
                       (Input control) </span></h4>
                       </a>
                    <small className='date'>Aug 6 - Aug 8</small>
                    <div className="tools">
                        <h4>Skills : </h4>
                        <small>HTML5, CSS, Javascript, React.</small>
                    </div>
                    <h5>
                        Details:
                    </h5>
                    <p>It was my First Project. It was a form designed to gain the knowledge of input controll. Breakdowns,
                        when the user enters the data in the input field below the table, the data was imidietly added to the table. And also I have learned some new css skills as well.
                    </p>
                </section>
            </div>
            <div className="workingtime">
                <span>Outlooks of the Project :</span>
                <aside>
                {/* <img className='simplef' src='../../../public/projectoutlook/simpleformout.png' alt="" /> */}
                <p className="outsf out"></p>

                </aside>
            </div>
            <div className="nxtPro">
            <Link to={'/whatsAppProject'}>
            <div className="pro5 ">
        {/* <img src="../public/project/pro5.png" alt="" /> */}
        <p className="proimg5"></p>
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
        <p className="proimg4"></p>
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

  <Link to={'/weatherProject'}>
  <div className="pro3">
        {/* <img src="../public/project/pro1.png" alt="" /> */}
        <p className="proimg1"></p>
        <div className="covering">
            <p>Aug 10</p>
            <p> Weather App</p>
             <p style={{
                color:'rgb(5, 223, 16)'
            }}> Finished</p>
           
        </div>
    </div>
    </Link>

  <Link to={'/todolistProject'}>
    <div className="pro1">
        {/* <img src="../public/project/pro3.png" alt="" /> */}
        <p className="proimg3"></p>
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

export default SimpleFormPage