import {useState} from 'react';

export default function InputName(props) {

    const [secondryName, setSecondryName] = useState("");

    
    function checkPrimaryName(event){
        console.log("Check Primary Name works !")
        console.log(event.target.value)

        if (props.isPrimaryName === true){
            setSecondryName("");
        } else {
           setSecondryName(event.target.value);
        }
    }


    return (
      <>
        <h2>Secondry Name: {secondryName}</h2>
        <input onChange={checkPrimaryName}></input>
      </>    
    );
}

