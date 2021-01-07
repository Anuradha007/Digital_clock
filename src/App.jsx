import React, { useState } from 'react';

const App = () => {
   const time = new Date().toLocaleTimeString();
  const [ctime , settime] = useState(time);
  const updateTime = () =>{
   const time = new Date().toLocaleTimeString();
   settime(time);
  }
  setInterval(updateTime,1000);
 return(
  <>
  <button> {ctime} </button> 
  </>
 );
}

export default App;