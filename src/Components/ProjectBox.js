import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    EasyBankDesc : " The EasyBank Landing Page project showcases my expertise in front-end web development and design, emphasizing my proficiency in creating responsive web interfaces.",
    EasyBankGithub : "https://github.com/manan011/easybank-main",
    EasyBankWebsite : "https://manan011.github.io/easybank-main/",

    RogFreeDesc : "Rog Free is a web-based platform that shows you over seven specialised yoga postures for specific diseases or health problems. Deployed the application on GitHub Pages.",
    RogFreeGithub : "https://github.com/manan011/rogfree-main",
    RogFreeWebsite : "https://manan011.github.io/rogfree-main//",

    KanbanDesc:"Kanban is a web-based task management application designed and developed to streamline and simplify the workflow and task management processes.",
    KanbanGithub:"https://github.com/manan011/kanban-todo-main",
    KanbanWebsite:"https://kanban-manan-dev.netlify.app/"

    // KanbanDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    // NewsletterGithub:"",
    // NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox