import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';
import InputName from './InputName';
import ChildComponent from './ChildComponent';
import ColorChangeText from './ColorChangeText';
import SiblingChangeButton from './SiblingChangeButton';

function App() {
  
  const [name , setName] = useState("");

  const [childName , setChildName] = useState("Placeholder");

  const [parentCase , setParentCase] = useState("default");

  const [textColor , setTextColor] = useState("black");

  const [siblingText , setSiblingText] = useState("");

  console.log(parentCase)

  function textFromChildAndGrand(value){
    if (parentCase === "upper"){
      setChildName(value.toUpperCase());
    } else if (parentCase === "lower"){
      setChildName(value.toLowerCase());
    } else {
      setChildName(value);
    }
  }

  function changeTextCase(value){
    if (value === "upper"){
      setParentCase(value);
      setChildName(childName.toUpperCase())
    } else if (value === "lower"){
      setParentCase(value);
      setChildName(childName.toLowerCase())
    } else {
      setParentCase(value);
    }
  }

  function siblingFunc(val){
    setSiblingText(val)
    console.log(val)
  }


  return (
    <div className="App">
      <header>
        <h2 className='parent'>Parent Element</h2>
        <h2 className='child'>Child Element</h2>
        <h2 className='grandchild'>Grandchild Element</h2>
      </header>

      <main>
        <h3>The following examples show data being transferred between functional components using functions and parameters:</h3>
        <div className='exampleOne'>
          <div className='parent'>
            <h3>Text in parent: </h3>
            <h1><span>{name}'s</span> Project</h1>
          </div>

          <div className='child'>
            <h3>Button's in child component : </h3>
            <Button handleClick={value=>setName(value)}/>
          </div>

          <div className='child'>
            <InputName isPrimaryName={name} inputSubmitted={val=>setName(val)} alternativeText={siblingText}/>
          </div>
        </div>

        <h3>This example shows how we can have data in a parent component which can be changed by something in a grandchild element:</h3>   
        <div className='exampleTwo'>
          {/* This h3 element will be updated by a change in the child component. We pass 
          a prop to the child component which is an anonymous function which will then 
          update the useState set in the parent component */}
          <h3 className='parent'>Parent Text Element : {childName}</h3>
          <ChildComponent randomPropName={value => textFromChildAndGrand(value)} 
          textCaseFromButton={value => changeTextCase(value)}
          textFromSiblingChangeButton={siblingText}
          />
        </div>

        <h3>This example shows passing an action down from a parent element and having it effect a child component</h3>
        <div className='exampleThree'>
          <div>
            <div className='parent'>
              <button onClick={()=>setTextColor("red")}>Red</button>
              <button onClick={()=>setTextColor("green")}>Green</button>
              <button onClick={()=>setTextColor("blue")}>Blue</button>
            </div>
            <ColorChangeText currentColor={textColor}/>
          </div>
        </div>

        <h3>This example shows an action in a child component that then is passed back to the parent, and then down to another 
           seperate child component
        </h3>
        <div className='exampleThree'>
          <div>
            <div className='parent'>
              <h3>This Text is in the parent element</h3>
            </div>
            <SiblingChangeButton siblingText={val => siblingFunc(val)}/>
          </div>
        </div>
        

      </main>
    </div>
  );
}

export default App;


