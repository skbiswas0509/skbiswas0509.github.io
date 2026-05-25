import React from 'react'
import './certificate.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import certificates_data from '../../assets/certificates_data'
import { FaArrowRight } from "react-icons/fa6";
const Certificate = () => {

  const handleClick = ()=>{
    window.open("https://www.linkedin.com/in/sukumar-biswas-919888244/details/certifications/", "_blank");
  }
  return (
    <div id='certificate' className='cert'>
        <div className="cert-title">
        <h1>Certificates</h1>
        <img src={theme_pattern} alt="Enter the theme pattern here" />
        </div>
        <div className="certificates-container">
          {
            certificates_data.map((certificate,index)=>{
              return <div key={index} className='certificates-format'>
                <h3>{certificate.c_name}</h3>
                <h2>{certificate.c_auth}</h2>
                {/* <div className="certificates-readmore">
                  <p>Read More</p>
                  <FaArrowRight size={30}/>
                </div> */}
              </div>
            })
          }
        </div>
        <div onClick={handleClick} className="certificates-showmore">
          <p>Show More</p>
          <FaArrowRight size={30}/>
        </div>
    </div>
    
  )
}

export default Certificate