import React, { useState, useEffect } from 'react';

const MenuBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    // Function to update current time
    const updateTime = () => {
      const date = new Date();
      const formattedTime = date.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
      setCurrentTime(formattedTime);
    };

    // Update time initially and start an interval to update time every second
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="menu-bar w-full h-8   flex items-center justify-between bg-opacity-70 bg-gray-700 backdrop-blur-md">
      <div className="left flex items-center ml-4">
         
        <span className="menus h-full flex items-center ml-4 text-white text-opacity-95 text-xs">EKARSHA SUMAJ KOTIKALAPOODI</span>
       
      </div>
      <div className="right flex items-center mr-4">
        <div className="menu-time text-white text-xs ml-4">{currentTime}</div>
      </div>
    </div>
  );
};

export default MenuBar;
