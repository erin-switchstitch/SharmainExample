import {useState} from 'react';

export default function InputName(props) {

    const [secondaryName, setSecondaryName] = useState("");

    console.log(props.alternativeText)

    if ((props.alternativeText.length !== 0) &&(secondaryName !== props.alternativeText)){
      setSecondaryName(props.alternativeText);
    }


    return (
      <>
        <h3>Input readout in child component: {secondaryName}</h3>
        <input onChange={event => setSecondaryName(event.target.value)}></input>
        <h4>Button in child component changes text in parent component:</h4>
        <input onClick={event=>{
          if (secondaryName.length !== 0){
            props.inputSubmitted(secondaryName)
          } else {
            alert("Please enter text into the input field aboce the button element")
          }
          
          
        }} type="button" value="Change Project Name"></input>
      </>    
    );
}

