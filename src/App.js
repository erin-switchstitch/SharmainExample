import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';
import InputName from './InputName';

function App() {
  
  const [name, setName] = useState("");
  const [primaryName, setPrimaryName] = useState(false);


  // if (name.length > 0){
  //   setPrimaryName(true);
  // } else {
  //   setPrimaryName(false)
  // }

  console.log(name.length)
  console.log(primaryName)

  return (
    <div className="App">
      <header>
        <h1><span>{name}'s</span> Project</h1>
      </header>

      <main>
        <Button names="Erin" handleClick={()=>
          {
            setPrimaryName(true);
            setName("Erin");
          }
          }/>
        <Button names="Amanda" handleClick={()=>
          {
            setPrimaryName(true);
            setName("Amanda");
          }
          }/>
        <Button names="Sharmaine" handleClick={()=>
          {
            setPrimaryName(true);
            setName("Sharmaine");
          }
          }/>
        <InputName isPrimaryName={primaryName}/>
      </main>
    </div>
  );
}

export default App;
