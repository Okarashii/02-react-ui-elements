import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    // const App = () =>

    // O_o => states
    const [isToggled, setToggled] = useState(true);
    const [isChecked, setCheckBoxed] = useState(true);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [inputRadioBtn, setRadioBtn] = useState('');
    const [selectDepartmentID, setDepartmentID] = useState('');
    // O_o => fncs
    const toggleTrueFalse = () => setToggled(!isToggled);
    const updateFname = () => setFname(fname);
    const updateLname = () => setLname(lname);
    const selectDepartment = () => setDepartmentID(selectDepartmentID);


    return (
        <form>
            <div className="App">
                <h3>CompanyXYZ Ausflugstag</h3>
                <h4>Skitag 2024</h4>
                <h5>Anmeldung</h5>

                <hr />
                <div className='App-block'>
                    <p>Personalien:</p>
                    <p>
                        Anrede:<br />
                        <label>
                            <input type="radio" name="anrede" value="Herr" />
                            Herr
                        </label>
                        <label>
                            <input type="radio" name="anrede" value="Frau" />
                            Frau
                        </label>
                        <label>
                            <input type="radio" name="anrede" value="Keine Angabe" />
                            Keine Angabe
                        </label>
                    </p>

                    <p>
                        <label for="fname">Vorname:</label><br />
                        <input type="text" id="fname" name="fname" value={fname} defaultValue="Vorname" /><br />

                        <label for="lname">Nachname:</label><br />
                        <input type="text" id="lname" name="lname" value={lname} defaultValue="Nachname" />
                    </p>
                </div>
                
                <p>
                    <label htmlFor={selectDepartmentID}>
                        Abteilung:<br />
                        <select id={selectDepartmentID} name="selectDepartment">
                            <option defaultValue="selectDepartment">Abteilung</option>
                            <option value="consulting">Consulting</option>
                            <option value="creation">Creation</option>
                            <option value="itDevelopment">IT-Development</option>
                            <option value="itSupport">IT-Support</option>
                        </select>
                    </label>
                </p>

                <hr />



                <label>
                    Checkbox: <input type="checkbox" name="myCheckbox" />
                </label>
                <hr />
                <p>
                    Radio buttons:
                    <label>
                        <input type="radio" name="myRadio" value="option1" />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" name="myRadio" value="option2" />
                        Option 2
                    </label>
                </p>


            </div>
        </form>
    );
}

export default App;
