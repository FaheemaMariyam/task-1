import React from 'react';
function A() {
    const age=19;
    return <div> <h1>{age>18 ? "not minor" : "minor"}
    
    </h1>
    {age>18 && <p>now can vote</p>}
    </div>
    
//  if(isLogedIn){
//     return <h1>Welcome back</h1>
//  }
 
//     return <h1>Please log in</h1>
//  switch(role){
//     case 'admin':
//         return <h1>welcome admin</h1>
//           case 'teacher':
//         return <h1>welcome teache</h1>
//           case 'student':
//         return <h1>welcome student</h1>
//  }

}
export default A;