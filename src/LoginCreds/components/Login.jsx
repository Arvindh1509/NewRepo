import React, { useState } from "react"

function Login(props){
    const [mouse,setMouse]=useState(false);
    const [change, setChange] = useState({
        fName:"",
        lName:""
    });
    // const [name, setName] = useState("");

    function changehandle(event) {
        const {value,name}=event.target;

        setChange(prevValue =>{
            if(name==="fName") {
                return{
                    fName:value,
                    lName:prevValue.lName
                }
        } else if(name=== "lName"){
            return{
                fName:prevValue.fName,
                lName:value
            }
        }
    });
      }

    // function Names() {
    //     setName(change);
    //   }

    function handleMouse(){
        setMouse(true);
    }

    function handleMouseOut(){
        setMouse(false);
    }

    return(
        <div>
           <h1>Hello {change.fName} {change.lName}</h1>
      <form >
        <input
        name="fName"
          onChange={changehandle}
          type="text"
          placeholder="What's your name?"
          value={change.fName}
        />

        <input 
        name="lName"
        onChange={changehandle}
        type="text"
        placeholder="lname"
        value={change.lName}
        />

        <button
          style={{ backgroundColor: mouse ? "black" : "white" }}
          onMouseOver={handleMouse}
          onMouseOut={handleMouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
        </div>
    )
}

export default Login;

