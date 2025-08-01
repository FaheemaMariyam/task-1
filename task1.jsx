import React,{useState} from "react";
function Theme(){
    const[isWhite,setWhite]=useState(true);
    return(
        <div style={{backgroundColor: isWhite ? "white" : "black", height:"100vh", width:"100vw"}}>
            <button onClick={()=>setWhite(!isWhite)}>{isWhite ? "Dark mode" : "Light mode"}</button>
        </div>
    )
}
export default Theme;
