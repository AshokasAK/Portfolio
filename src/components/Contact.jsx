import React from 'react'
import '../../css/Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key","07c86766-7a7c-41fd-8551-3a7c365a6d5a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
    return (
        <>

<Link to={'/contact'}>
        <h4 
        style={{
          marginTop:'3rem',
          fontSize:'18px',
          display:'flex',
          justifyContent:'center'
        }}
        >Get  in  touch:</h4>
        {/* <section className='contactdetails'>
          <a href="mailto:ashokkumarmoff@gmail.com">
            <i class="fa-regular fa-envelope" id='mailicon'></i>
          </a>
          <a href="https://wa.me/8220472196?text = 'Hello Ashokkumar'">
            <i className="fa-brands fa-whatsapp" id='whatsappicon'></i>
          </a>
          <a href="https://www.instagram.com/dark__pnix/">
            <i className="fa-brands fa-instagram" id='instaicon'></i>
          </a>
          <a href="https://www.facebook.com/ashokkumar">
            <i class="fa-brands fa-facebook-f" id='facebookicon'></i>
          </a>
        </section> */}
        <div className="form">
          
        <form onSubmit={onSubmit}>
        {/* <input type="hidden" name="access_key" value="07c86766-7a7c-41fd-8551-3a7c365a6d5a"/> */}
          <label htmlFor="name">NAME
          <input type="text" name='name' id='name'
          placeholder='Enter Your Name'
          required />
          </label>
          <label htmlFor="email">EMAIL
          <input type="email" name='email' id='email' 
          placeholder='Enter Your Email'
          required />
          </label>
          <label htmlFor="message" id='mm'>MESSAGE
          </label>
          <textarea name='message' id='message' 
          placeholder='Hii'
          />
          <button type='submit' className='send'>SEND</button>
        </form>
        </div>



</Link> 
   <pre>Coded by
<a href="https://github.com/AshokasAK">
<i
   style={{
     color:'#3066f9',
     fontSize:'16px'
    }}
    > @Ashokkumar</i>
</a>
   
   </pre>
   </>
  )
}

export default Contact