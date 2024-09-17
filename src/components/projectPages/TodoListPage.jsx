import React, { useEffect } from 'react'
import {Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";



const TodoListPage = () => {

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
              {/* <img src="../public/project/pro3.png" alt="" /> */}
              <p className="proimgsi3"></p>

            </aside>
            <section>
              <h4 className="proname">
                TODO List <span>(CRUD)</span>
              </h4>
              <small className="date">Aug 3 - Aug 6</small>
              <div className="tools">
                <h4>Skills : </h4>
                <small>HTML5, CSS, Javascript, React.</small>
              </div>
              <h5>Details:</h5>
              <p>
                It was an TODO List with the CRUD opertion functionalties.It
                uses the localstorage like a fake database, when ever the user
                delete all things and refers the page it restore the data that
                was lastly stored in the localstorage.In this project, you can
                add a task{" "}
                <b
                  style={{
                    fontWeight: "900",
                  }}
                >
                  (C)
                </b>
                , read a task{" "}
                <b
                  style={{
                    fontWeight: "900",
                  }}
                >
                  (R)
                </b>
                ,update a task
                <b
                  style={{
                    fontWeight: "900",
                  }}
                >
                  (C)
                </b>
                , and delete a task
                <b
                  style={{
                    fontWeight: "900",
                  }}
                >
                  (C)
                </b>{" "}
                to justify the name
                <b
                  style={{
                    fontWeight: "900",
                    paddingLeft: "5px",
                  }}
                >
                  CRUD
                </b>{" "}
                operation.
              </p>
            </section>
          </div>
          <div className="workingtime">
            <span>Outlooks of the Project :</span>
            <aside>
              {/* <img
                src="../../../public/projectoutlook/todolistout1.png"
                alt=""
              /> */}
              {/* <img
                src="../../../public/projectoutlook/todolistout2.png"
                alt=""
              /> */}
              <p className="outtodo1 out"></p>
              <p className="outtodo2 out"></p>
            </aside>
          </div>
          <div className="nxtPro">
            <Link to={"/whatsAppProject"}>
              <div className="pro5 ">
                {/* <img src="../public/project/pro5.png" alt="" /> */}
                <p className="proimg5 pig"></p>
                <div className="covering">
                  <p>Aug 26</p>
                  <p> WhatsappClone</p>
                  <p
                    style={{
                      color: "red",
                    }}
                  >
                    {" "}
                    In progress..
                  </p>
                </div>
              </div>
            </Link>

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

export default TodoListPage