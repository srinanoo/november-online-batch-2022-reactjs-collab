import React from 'react';
import Customerone from './Pages/Customer';
import Progressone from './Pages/Progress';
import { Button } from 'antd/es/radio';
//import Tables from './Pages/Email';
import Footercopy from './Layouts/Footer';
//import Profile from './Layouts/Profile';
import Oneslider from './Component/Slider';
function App(){
  return(
    <>
    <div className="container w-100% mx-4% px-16 py-16">
     <div className="flex items-start justify-between h-screen">
      <div className="flex-auto"><bold>CUSTOMER</bold></div>
      <div className="flex gap-x-4">
        <Button className="bg-red-600">+ADD</Button>
        </div>
    </div>
    </div>
     <div>
      <Customerone></Customerone>
    </div>  
    <div className="container w-100% mx-4% px-16 py-16">
      <Progressone></Progressone>
    <Footercopy></Footercopy>
    {/* <Profile></Profile> */}
    </div>
    {/* <div>
      <Tables></Tables>
    </div> */}
    <div>
      <Oneslider></Oneslider>
    </div>
      
    </>
  )
}

export default App;