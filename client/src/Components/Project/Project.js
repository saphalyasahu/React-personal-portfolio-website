import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css"
const Project =() =>{

     const data =[
        {
            name:"Markting App",
            des:"Own personal assistant It can send emails on your behalf It can play music for youIt is capable of opening websites like Google, Youtube, etc., in a web",
            Projectlink:"https://www.cssmatic.com/box-shadow",
            techused:[
                {
                    techname:"Java"
                },
                {
                    techname:"Spring-boot"
                },
                {
                    techname:"Hibernate"
                },
                {
                    techname:"mysql"
                },
                
            ]
        },

        {
            name:"TWITTER CHATBOT",
            des:"Our project is a comprehensive real estate management platform built on Spring Boot, offering services like property listing, tenant management, and various service integrations. We implemented a microservice architecture, ensuring scalability and reliability, and managed the development process using Git, Jenkins, and Docker",
            Projectlink:"https://www.cssmatic.com/box-shadow",
            techused:[
                {
                    techname:"python 3"
                },
                {
                    techname:"Twitter-Api"
                },
                {
                    techname:"jupyter Notebook"
                },
                
            ]
        },

     {
        name:"Building online Banking App",
        des:"Building online Banking App this is an extensive project online banking app or payment gateway this project is looks like  a basic verson of an online banking app",
        Projectlink:"https://www.cssmatic.com/box-shadow",
        techused:[
            {
                techname:"python"
            },
            {
                techname:"pycharm"
            },
            {
                techname:"Google colb"
            },
            {
                techname:"Libraries:math"
            },
            
        ]
    },
    {
        name:"Birthday Reminder React App",
        des:"By the use of React.js i made a project Birthday reminder app with the use ",
        Projectlink:"https://www.cssmatic.com/box-shadow",
        techused:[
            {
                techname:"React.js"
            },
            {
                techname:"JavaScript"
            },
            {
                techname:"Webdriverlo"
            },
            {
                techname:"visual e2 testing"
            },
            
        ]
    },

 ]
    return (
        <div className="container">
            
        <div className='section-title'>
                 <h5>Project</h5>
                 <span className='line'></span>
            </div>

        <div className="row">
           {data.map((item,index)=>(
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}> 
                  
                <ProjectList {...item}/>

            </div>
             ))}
          </div>
        </div>
    );
};
export default Project