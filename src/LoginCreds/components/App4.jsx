import React from "react";
import Login from "./Login";
import Loggedin from "./Loggedin";

var cred=true;



function App4() {
  return (
    <div className="container">
      {cred===true ? <Login cond={cred}/> : <Loggedin/> }
      
    </div>
  );
}

export default App4;
