import React,{ useState } from "react";
import {FcExpand,FcCollapse} from "react-icons/fc";
import "./Project.css";
const ProjectList  = ({name,des,Projectlink,techused}) =>{
    const[show,setshow] = useState(false);
    const handleShowandcollapse = () => {
        setshow(!show);
    };

    return (
        <div className={show ? "project-list-opend project-List":"project-List"} 
        onClick={handleShowandcollapse}>
         <div className='title-and-collapse-option'>
      <h5>{name}</h5>
      <p> 
        {show? <FcCollapse size={20}/>:<FcExpand size={20} /> }
      </p>
        </div>

        <div className="description"></div>
          {show? (<p>{des}</p>): <p>{des.substring(0,50)}...Read more</p>}
        

        <div className="row">

            {techused && techused.map((tech,index)=>(
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 key={index}">
                <div className="tech-used-in-project">
                    <p>{tech.techname}</p>

                </div>
                </div>
            ))}
            
            
        </div>
         <div className="live-demo-button">
           <a target="_"href={Projectlink}>Live Demo</a>
         </div>
        
        </div>
    )
}
export default ProjectList