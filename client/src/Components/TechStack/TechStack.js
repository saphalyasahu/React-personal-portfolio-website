import React,{useState} from "react"
import"./TechStack.css";

const TechStack = ( ) => {

    const data=[
         
        {
            name:"Full Stack Developer"
        },

        {
            name:"Node js"
        },
        {
            name:"React js"
        },
        {
            name:"JavaScript"
        },
        {
            name:"Core java"
        },
        {
            name:"Typescript"
        },
        {
            name:"Python"
        },
        {
            name:"MySQL"
        },
        {
            name:"Problem Solving"
        },
        {
            name:"Communication"
        },
        {
            name:"HTML"
        },  
        {
            name:"CSS"
        },
    ];

    const colors = [

        "#00ff80",
        "#8f00b3",
        "#ff0000",
        "#A5ACE1",
        "#ffff00",
        "#00ff00",
        "#54C6BA",
        "#ff0080",
        "#ff4000",
        "#2600d9",
        "#9d497a",
        "#3366ff",
    ];
    
    const [showmoreTechStack,setShowMoreTechStack] =useState (9);

    const loadMore = ()=>{
        setShowMoreTechStack((prev)=>prev+3);
        }


    return (
        <div className="container techstack-section">

            <div className='section-title'>
                 <h5>Tech Stack</h5>
                 <span className='line'></span>
            </div>

            <div className='row'>
               {data.slice(0,showmoreTechStack).map((item,index) => (
                <div className='col-xl-4 col-lg-4  col-md-6 col-sm-12'key={index} >
                     <div className={index===0?"tech-content-marked tech-content ":"tech-content"}>
                        <span className="tech-number" style={{backgroundColor:colors[index]}}> 
                            {index+1}
                            </span> 
                     <p>{item.name}</p>
                    </div>                      
                    
                    </div>
               ))}
            </div>

            {showmoreTechStack >= data.length ?null:( 
            <span className="load-more-tech-stack"onClick={loadMore} >
                Load More 
            </span>
            )}
        </div>
    )
}

export default TechStack
