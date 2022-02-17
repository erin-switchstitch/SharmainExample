import {useState} from 'react';

export default function ColorChangeText(props) {

    console.log(props.currentColor)
  return (    
    <div className='child'>
        <h2 style={{color: props.currentColor}}>This text is in the child element, and is being changed from the parent element buttons</h2>
    </div>
  );
}




