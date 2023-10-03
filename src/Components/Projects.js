import React from 'react';
import ProjectBox from './ProjectBox';
import KanbanImage from '../images/Kanban.png';
import RogfreeImage from '../images/RogfreeImage.png';
import EasyBankImage from '../images/EasyBankImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={KanbanImage} projectName="Kanban" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        <ProjectBox projectPhoto={EasyBankImage} projectName="EasyBank" />
      </div>

    </div>
  )
}

export default Projects