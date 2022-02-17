import {useState} from 'react';

export default function SiblingChangeButton(props) {

    console.log(props.siblingText)
  return (    
    <div className='child'>
        <h3>Input box is in child component:</h3>
        <input onChange={event => props.siblingText(event.target.value)}></input>
    </div>
  );
}




