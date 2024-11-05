import React, { useEffect, useState } from 'react';

export const Count = () => {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState([]);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count!=0)
    setCount(count - 1);
  
  };
  useEffect (() => {
    console.log('loading');
  },);
   
  return (
    <div className='text-3xl '>
        <h1>{count}</h1>
      <button type="button" class="btn rounded  bg-slate-200 text-blue-700 " onClick={increment} >increment</button>
      <button type="button" class="btn rounded  bg-slate-200 text-blue-700 " onClick={decrement} >
        Decrement
      </button>
    </div>
  );
}
console.log('loading');
export default Count;
