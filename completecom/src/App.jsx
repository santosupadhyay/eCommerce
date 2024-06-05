import React from 'react'
import { useState } from 'react';

export default function App() {
  const[count, setCount] = useState(0);

  function increment () {
      setCount(count+1)   
      if(count >= 20){
        setCount(20)
      }     
  }

  function decrement () {
      setCount(count-1)
      if(count <= 0){
      setCount(0)
    }
  }
  
  return (
    <>
    <button onClick={increment}>
      inc
    </button>
    <p>
      {count}
    </p>
    <button onClick={decrement}>
      dec
    </button>
      
    </>
  )
}

