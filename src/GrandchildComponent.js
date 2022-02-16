import {useState} from 'react';

export default function GrandchildComponent(props) {

    console.log(props.onPress)

    return(
        <div className='grandchild'>
            <h3>Grandchild Buttons : </h3>
            <button onClick={() => props.onPress("default")}>Default Case</button>
            <button onClick={() => props.onPress("upper")}>UpperCase</button>
            <button onClick={() => props.onPress("lower")}>Lowercase</button>
        </div>
    )
}


