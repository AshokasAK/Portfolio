import React, { useEffect } from 'react'
import '../../../css/WhatsAppPage.css'
import {Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import '../../../css/WhatsAppPage.css'
// import whatsappout from '../../../public/projectoutlook/whatsappout'

const SingleProject = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
  return (
    <>
      <div className="singlecontainer">
        <div className="singleContent">
          <div className="singlePro">
            <aside>
              {" "}
              {/* <img src="../public/project/pro5.png" alt="" /> */}
              <p className="proimgsi5"></p>

            </aside>
            <section>
              <h4 className="proname">WhatsApp Clone</h4>
              <small className="date">Aug 21 - In Progress</small>
              <div className="tools">
                <h4>Skills : </h4>
                <small>
                  HTML5, CSS, Javascript, React, Node.js, Express.js, MongoDB.
                </small>
              </div>
              <h5>Details:</h5>
              <p>
                It was a clone of WhatsApp.I used firebase for configuration and
                google Auth foe Authentication.I build its Frontend with the
                HTML5, CSS, Javascript.Its api requests were done with the help
                of Node.js, Express.js.And its data were maintained in a
                database which is MongoDB.I'm creating it in real-time.But I
                didn't completed it fully.The group names are real-time but I
                have a last step to make the chats in real-time
              </p>
            </section>
          </div>
          <div className="workingtime">
            <span>Outlooks of the Project :</span>
            <aside>
              {/* <img
                src="../../../public/projectoutlook/whatsappout.png"
                alt=""
              /> */}
              {/* <img
                className="f"
                src="../../../public/projectoutlook/scr1.png"
                alt=""
              /> */}
              {/* <img
                className="f"
                src="../../../public/projectoutlook/scr2.png"
                alt=""
              /> */}
              <p className="outwp1 out"></p>
              <p className="outwp2 out"></p>
              <p className="outwp3 out"></p>
            </aside>
          </div>
          <div className="nxtPro">
            <Link to={"/swiggyProject"}>
              <div className="pro4">
                {/* <img src="../public/project/pro4.png" alt="" /> */}
                <p className="proimg4 pig"></p>
                <div className="covering">
                  <p> Aug 20</p>
                  <p>Swiggy Clone</p>
                  <p
                    style={{
                      color: "rgb(5, 223, 16)",
                    }}
                  >
                    Finished
                  </p>
                </div>
              </div>
            </Link>

            <Link to={"/weatherProject"}>
              <div className="pro3">
                {/* <img src="../public/project/pro1.png" alt="" />
                 */}
                <p className="proimg1 pig"></p>
                <div className="covering">
                  <p>Aug 10</p>
                  <p> Weather App</p>
                  <p
                    style={{
                      color: "rgb(5, 223, 16)",
                    }}
                  >
                    {" "}
                    Finished
                  </p>
                </div>
              </div>
            </Link>

            <Link to={"/simpleformProject"}>
              <div className="pro2">
                {/* <img src="../public/project/pro2.png" alt="" /> */}
                <p className="proimg2 pig"></p>
                <div className="covering">
                  <p>Aug 8</p>
                  <p>Simple Form</p>
                  <p
                    style={{
                      color: "rgb(5, 223, 16)",
                    }}
                  >
                    {" "}
                    Finished
                  </p>
                </div>
              </div>
            </Link>

            <Link to={"/todolistProject"}>
              <div className="pro1">
                {/* <img src="../public/project/pro3.png" alt="" /> */}
                <p className="proimg3 pig"></p>
                <div className="covering">
                  <p>Aug 6</p>
                  <p>CRUD TODO List</p>
                  <p
                    style={{
                      color: "rgb(5, 223, 16)",
                    }}
                  >
                    {" "}
                    Finished
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <Link to={"/"}>
          <span className="spanhome">
            <b className="home">
              <FaArrowAltCircleLeft
                style={{
                  marginRight: "10px",
                }}
              />{" "}
              Retrun To Home
            </b>
          </span>
        </Link>

        <div className="fill"></div>
      </div>
    </>
  );
}

export default SingleProject