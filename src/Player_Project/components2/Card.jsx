import React from "react";
import Avatar from "./Avatar";
import Detail from "./Deatils";


function Card(props){
    return(
     <div className="card">
      <div className="top">
            <h1 className="name">{props.name}</h1>
            <Avatar img={props.img} />
      </div>    
      <div className="bottom">
            <Detail detailinfo={props.team}/>
            <Detail detailinfo={props.year}/>
      </div>
     </div>
    );
}
export default Card;
