import { useState } from 'react'
import MenuBar from './components/MenuBar'
import Dock from './components/Dock'
import React from 'react'
 import SubMainComponent from './components/subComponent/SubMainComponent'
 function App() {
  const [count, setCount] = useState(0)
  const [currentTab, setCurrentTab] = useState('Home');


  return (
    <div style={{
      backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d5bb42d-caec-42a9-818e-dcc4b24bb273/df6zupw-8d7110bb-8667-4275-8a35-7aac54847ffa.jpg/v1/fill/w_1280,h_800,q_75,strp/mac_os_wallpaper_by_egeyoruk_df6zupw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNGQ1YmI0MmQtY2FlYy00MmE5LTgxOGUtZGNjNGIyNGJiMjczXC9kZjZ6dXB3LThkNzExMGJiLTg2NjctNDI3NS04YTM1LTdhYWM1NDg0N2ZmYS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.IUqqlRFw-5xs-w5L1rzhjhR3o2KMVxb6ybpp53xSzCk')`,
      width: "100vw",
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
       

       
    }}>
      <MenuBar />
      <div style={{ flex: "1 1 auto", overflowY: "auto" }}> {/* SubMainComponent container */}
        <SubMainComponent currentTab={currentTab} />
      </div>
      <Dock setCurrentTab={setCurrentTab} />
    </div>
    
  )
}

export default App
