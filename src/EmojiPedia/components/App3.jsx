import React from "react";
import Emojis from "./emoji";
import emojipedia from "../emojipedia";

// function createEmoji(e){
//     return(
//         <Emojis
//         key={e.id}
//         emoji={e.emoji}
//         name={e.name}
//         meaning={e.meaning}
//             />
//     )
// }

function App3() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      
      <dl className="dictionary">
      {emojipedia.map((e)=>(
        <Emojis
        key={e.id}
        emoji={e.emoji}
        name={e.name}
        meaning={e.meaning}
            />
    )
)}; 
      </dl>
    </div>
  );
}

export default App3;
