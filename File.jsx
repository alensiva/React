import React, { useContext } from 'react';
import Themecontext from './Themecontext';
export const File = () => {
  const value=useContext(Themecontext)
  console.log(value);
  
 
  return (
    <div className={value.theme==='light' ? 'light':'dark'}><h2>hello</h2>
    <button onClick={value.toggletheme}>click</button>
      
    </div>

    
  );
};