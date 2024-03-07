import React, { useState } from 'react';
import './App.css';

function App() {

  // O_o => states
  const [isToggled, setToggled] = useState(true);
  const [isChecked, setCheckBoxed] = useState(true);
  const [inputVorname, setInputVorname] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputRadioBtn, setRadioBtn] = useState('');
  // O_o => fncs
  const toggleTrueFalse = () => setToggled(!isToggled);
  const checkBoxTrueFalse = () => setCheckBoxed(!isToggled);
  const updateVorname = () => setInputVorname(inputVorname);
  const updateName = () => setInputName(inputName);


  return (
    <div className="App">
      <header className="App-header">
        <p>Skitag Anmeldung</p>
      </header>

      <form>
        
      <label>
          Vorname:
          <input type='text' value='inputVorname'
            onChange={(e)=> {
              setInputVorname(e.target.value);
            }}
          />
      </label>

      <label>
          Name:
          <input type='text' value='inputName'
            onChange={(e)=> {
              setInputName(e.target.value);
            }}
          />
        </label>


      </form>
    </div>
  );
}

export default App;
