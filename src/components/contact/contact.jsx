import React, {useStates} from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "77493b20-ca76-4b4e-a98c-3285bc434e68");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          alert(data.message)
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    
    

  return (

    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="Enter the theme pattern here" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                {/* <p>I am currently available to new projects</p> */}
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Dhaka,Bangladesh</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>01586387996</p>
                    </div>
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>skbiswas.work@gmail.com</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )  
}

export default Contact