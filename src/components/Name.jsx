import React, { useEffect, useRef } from 'react'
import '../../css/Name.css'
import Naukri from '../../public/skillicon/naukri.png'
import Naukri1 from '../../public/skillicon/naukri1.png'

const Name = () => {
const span = useRef(null)

const roles = ["FullStack developer", "MERN Stack developer", "Frontend developer"];
const startingIndex = useRef(0);
const startingCount = useRef(0);

const type = () => {
  if (span.current) {
    if (startingCount.current < roles[startingIndex.current].length) {
      span.current.textContent += roles[startingIndex.current][startingCount.current];
      startingCount.current++;

      setTimeout(type,300);
    } else {
      startingCount.current = 0;
      startingIndex.current = (startingIndex.current + 1) % roles.length;
      span.current.textContent = '';
      setTimeout(type, 2000);
    }
  }
};

useEffect(() => {
  type();
}, []);



  return (
    <>
  <div className="names">
    <p className='im'>HII  THERE,</p>
    <p className='name'>I'M   <span
    >ASHOKKUMAR</span></p>
   
    <div className="glassform">
    <section className='contactdetails'>
          <a href="mailto:ashokkumarmoff@gmail.com">
            <i class="fa-regular fa-envelope" id='mailicon'></i>
          </a>
          <a href="https://wa.me/8220472196?text = 'Hello Ashokkumar'">
            <i className="fa-brands fa-whatsapp" id='whatsappicon'></i>
          </a>
          <a href="https://www.instagram.com/dark__pnix/">
            <i className="fa-brands fa-instagram" id='instaicon'></i>
          </a>
          <a href="https://www.linkedin.com/in/ashok-kumar-40776131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
          <i class="fa-brands fa-linkedin-in" id='linkedinicon'></i>
          </a>
          <a href="https://www.naukri.com/mnjuser/homepage">
          <div className="naukridiv">
          <img className='naukri1' src={Naukri1}/>
          <img className='naukri'  src={Naukri}/>
          </div>
          </a>
        </section>
        </div>
        </div>
    <p className='description'>I  was  a <span id='span' ref={span} ></span></p>

    </>
  )
}

export default Name