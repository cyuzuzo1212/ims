import React from 'react'
import "../../App.css"


const Contact =() => {
    return(
        
<div className='contact-container'>
    <div className='contact-left'>
        <h2 className='contact-text1'>Contact Us</h2>
        <p className='contact-text2'>Kigali Nyarugenge, KG ave 234</p>
        <p className='contact-text3'>Email:<span>inveto@gmail.com</span></p>
        <p className='contact-text3'>Phone:<span>+250786666666</span></p>
        <p className='contact-text3'>Skype:<span>Invet.win</span></p>
        <img src="map.jpg" alt="map" class="center"></img>
    </div>

    <div className='contact-right'>
<form className='contact-form'>
  
    <input type='text'
    placeholder='Your name'
    name='user_name' required/>

<input type='text'
    placeholder='Your Email'
    name='user_email' required/>
 <div className='namemail'>
<input type='text'
    placeholder='Subject'
    name='subject' required/>
</div>

    <textarea name='message'
    cols='50' rows='10'></textarea>
    <button type='submit' className='send-sms'>Send Message</button>
</form>
    </div>
</div>
    )
}
export default Contact