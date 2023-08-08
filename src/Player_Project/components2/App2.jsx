import React from "react";
import Card from "./Card";
import players from "../players";

function createCard(player){
      return(
     <Card  key={player.id}
            name={player.name}
            img={player.img}
            team={player.team}
            year={player.year}
      />
      )
}


function App2(){
    return (<div>
     <h1 className="heading">MY FAV PLAYERS</h1>
        {players.map(createCard)}

        
        </div>
    );
    
}

export default App2;