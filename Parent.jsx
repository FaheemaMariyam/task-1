// import react,{useState,useEffect} from 'react';

  
//   function App(){
//     const[state,setState]=useState([]);
//     useEffect(()=>{
//       fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res=>res.json())
//       .then(state=>setState(state.splice(0,10)),[])
//     })
//     return(
//       <div>
//         <h1>Fetch API</h1>
//         {state.map((state)=>
//         <div key={state.id}>
//         <h1>{state.title}</h1>
//          <h1>{state.body}</h1>
//          </div>
//          )}

//       </div>
//     )
//   }
// export default App;
// import React,{useState} from "react";
// function App(){
//   const[color,setcolor]=useState('');
//   return(
//     <div>
//     <input type="text" value={color} onChange={(e)=>setcolor(e.target.value)} />
//     <div style={{backgroundColor:color,  height:'200px' , width:'200px'}}>
//       <p style={{color:"white"}}>{color}</p>
//     </div>
    
// </div>
//   )
// }
// export default App;
// import React, { useState, useEffect } from 'react';

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     // Start timer
//     const interval = setInterval(() => {
//       setSeconds(prevSeconds => prevSeconds + 1);
//     }, 1000);

//     // Clean up the timer on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1>Timer: {seconds} seconds</h1>
//     </div>
//   );
// }

// export default Timer;
// import React, { useState, useEffect, useRef } from 'react';

// function Timer() {
//   const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const intervalRef = useRef(null); // store interval ID without re-rendering

//   useEffect(() => {
//     if (isRunning) {
//       intervalRef.current = setInterval(() => {
//         setSeconds(prev => prev + 1);
//       }, 1000);
//     }

//     return () => clearInterval(intervalRef.current);
//   }, [isRunning]);

//   const handleStart = () => setIsRunning(true);
//   const handleStop = () => setIsRunning(false);
//   const handleReset = () => {
//     setIsRunning(false);
//     setSeconds(0);
//   };

//   return (
//     <div>
//       <h1>Timer: {seconds} seconds</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

// export default Timer;
