import {useState} from 'react';

export default function Button(props) {
  return (    
    <div>
      <button onClick={()=>props.handleClick("Erin")}>Erin</button>
      <button onClick={()=>props.handleClick("Amanda")}>Amanda</button>
      <button onClick={()=>props.handleClick("Sharmaine")}>Sharmaine</button>
    </div>

  );
}







// export default function Button(props) {
//   return (    
//     <button onClick={props.handleClick}>{props.names}</button>
//   );
// }

