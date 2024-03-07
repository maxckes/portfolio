import React from "react";
import { IonIcon } from "@ionic/react";
import Resume from "../../assets/resumewhite.png"

const EducationTimeline: React.FC = () => {
  function toggleContainer() {
    const container = document.querySelector(".flex-1");
    container.classList.toggle("hidden");
  }
  
  return (
    
    <div className="flex justify-center ">
      <div className="flex-1 bg-gray-700 w-full max-w-[1000px] max-h-[600px]   bg-opacity-70 border-gray-100 border-1 rounded-lg">
        <div className="tracking-wide text-sm rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 h-full">
          <div className="header relative font-semibold bg-[#e5e7ebbf] dark:bg-[rgba(26,36,50,0.85)] border-b border-gray-300 dark:border-gray-700 h-8 flex items-center justify-center">
            <p className="text-white">Resume</p>
            <div className="absolute right-3 gap-1 flex">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <button
                id="close"
                 className="w-3 h-3 bg-red-500 rounded-full"
              ></button>
            </div>
          </div>
          <div className="max-h-[600px] overflow-auto p-2 md:p-12">
          <h2 className="text-white text-center">IT IS A GENERIC RESUME</h2>
          <br />
            <div className="flex items-center justify-center h-full">
              
              <img
                className="w-[100%]"
                src={Resume}
                alt="Resume Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
