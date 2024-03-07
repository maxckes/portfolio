import React from 'react'
import Home from './home'
import Skills from './Skills'
import Projects from './Projects'
import EducationTimeline from './EducationTimeline'
import Background from './Background'
import Dock from '../Dock'
 const SubMainComponent = ({ currentTab }) => {
  return (
    <div className='h-full'>
       {currentTab == 'Home' && (
        <div className=' p-2  flex justify-center '>
             <Home />
         </div>
      )}
      {currentTab == 'Skills' && (
        <div className=' p-2 flex justify-center h-full  '>
             <Skills />
         </div>
      )}
      {currentTab == 'Projects' && (
        <div className=' p-2  flex justify-center h-full  ]'>
             <Projects />
         </div>
      )}
      {currentTab == 'Resume' && (
        <div className=' p-2  flex justify-center h-full '>
          <EducationTimeline />
        </div>
      )}
      {currentTab == 'About me' && (
        <div className=' p-2  flex justify-center h-full  '>
          <Background />
        </div>
      )} 
       
            
        
    </div>
  );
};


export default SubMainComponent