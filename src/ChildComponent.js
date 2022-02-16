import {useState} from 'react';
import GrandchildComponent from './GrandchildComponent';

export default function ChildComponent(props) {

    console.log(props)

    const [ textCase , setTextCase ] = useState("default");
    console.log(textCase)

    return(
        <div>
            <div className='child'>
                <input 
                    onChange={event => props.randomPropName(event.target.value)}
                    type="text"
                    placeholder='Input field in child element'
                ></input>
            </div>

            <GrandchildComponent onPress={val => props.textCaseFromButton(val)}/>
        </div>

    )
}


