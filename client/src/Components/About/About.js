import React from 'react'
import "./About.css"
import profilepic from "../../Image/Kanha.jpeg"

const About = () => {
    return (
        <div className="container about-section">
        <div className="row">
         <div className="col-xl-4 col-lg-4 col-md-8 col-sm-8">
           <div className="About-image">
           <img src={profilepic}alt= "profile photo"/>
           </div>
         </div>


         <div className='col-xl-4 col-lg-4 col-md-8 col-sm-8'>
         <div className="about-details">
            <div className="about-title">
                <h5> About me </h5>
                <span className='line'></span>
            </div>
            <p>
            Experienced Java Spring Boot APIDeveloper with over 3.5 year experience in designing and implementing scalable and efficient backend
            solutions. Proven track record in developing robust RESTful APIs and microservices. Skilled in leveraging Spring Bootframework to
            streamline development processes and enhance application performance. Passionate about delivering high-quality software solutions that
            meet clientrequirements   
            </p>         
          </div>
         </div>
        </div>
      </div>
    )
}

export default About