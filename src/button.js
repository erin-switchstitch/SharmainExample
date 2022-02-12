import {useState} from 'react';

export default function Button(props) {
  return (    
    <button onClick={props.handleClick}>{props.names}</button>
  );
}

