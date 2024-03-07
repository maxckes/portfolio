import React, { useState } from 'react';

import Dock from './Dock';
import SubMainComponent from './subComponent/SubMainComponent';
const MainComponent = (current) => {

  return (
    <div>
      <SubMainComponent currentTab={current} />

    </div>
  );
};

export default MainComponent;
