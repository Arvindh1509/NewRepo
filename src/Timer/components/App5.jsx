import React, { useState } from "react";



function App5(){

    setInterval(increase,1000);
    var count=0;
    var cred=false;

    const [now,setNew] = useState(0);

    function increase()
    {
       cred=true;
        count=count+1
        setNew(count);
    }

    return(
        <div className="container">
            <h1>{now}</h1>
            <button onClick={increase}>Get time</button>
            {cred && <button>stop time</button>}
        </div>
    )
}

export default App5;