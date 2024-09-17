import React, { useEffect } from 'react'
import '../../css/Certificates.css'
import { Link } from 'react-router-dom'

const Certificate = () => {
  
    
    const scrollingCertificates = ()=>{
      const container =document.querySelector('.certificates')
      const certificate1 =document.querySelector('.cert1')
      const certificates =document.querySelectorAll('.cert')

      console.log(certificate1.offsetLeft)
      console.log(container.offsetLeft)
      if(certificate1.offsetLeft >= 440){
        console.log("hii")
      }
    }

// useEffect(()=>{
//  scrollingCertificates()
// },[])

  return (
    <>
    <Link to={'/achive'}></Link>
    <p className='certpara'>I have attented the online workshops and gains knowledge about the funtamentals, these are the proofs ,</p>
    <div className="certificates">
        <div className="cert1 cert">
    {/* <img src="../public/certificate/html.png" alt="" /> */}
    <p className='img1'></p>
        </div>
        <div className="cert2 cert">
    {/* <img src="../public/certificate/css.png" alt="" /> */}
    <p className='img2'></p>
        </div>
        <div className="cert3 cert">
    {/* <img src="../public/certificate/mern.png" alt="" /> */}
    <p className='img3'></p>
        </div>
    </div>
    </>
  )
}

export default Certificate