import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

    // O_o => states
    const [overnight, setOvernight] = useState(false);

    // O_o => fncs

    return (
        <form>
            <div className='App'>
                <h3>CompanyXYZ Ausflugstag</h3>
                <h4>Skitag 2024</h4>
                <h5>Anmeldung</h5>

                <hr />
                <div className='App-block'>
                    <p>Personalien:</p>
                    <p>
                        Anrede:<br />
                        <label>
                            <input type='radio' name='anrede' value='Herr' />
                            Herr
                        </label>
                        <label>
                            <input type='radio' name='anrede' value='Frau' />
                            Frau
                        </label>
                        <label>
                            <input type='radio' name='anrede' value='Keine' />
                            Keine
                        </label>
                    </p>

                    <p>
                        <label for='fname'>Vorname:</label><br />
                        <input type='text' id='fname' name='fname' placeholder='Vorname' /><br />

                        <label for='lname'>Nachname:</label><br />
                        <input type='text' id='lname' name='lname' placeholder='Nachname' />
                    </p>
                </div>
                
                <p>
                    <label>
                        Abteilung:<br />
                        <select id='selectDepartmentID' name='selectDepartment'>
                            <option value='consulting'>Consulting</option>
                            <option value='creation'>Creation</option>
                            <option value='itDevelopment'>IT-Development</option>
                            <option value='itSupport'>IT-Support</option>
                        </select>
                    </label>
                </p>

                <hr />
                
                <p>
                    Anreise:
                    <label>
                        <input type='radio' name='anreise' value='car' />
                        Carfahrt am Freitagmorgen
                    </label>
                    <label>
                        <input type='radio' name='anreise' value='individuell' />
                        individuell
                    </label>
                </p>
                <hr />
                
                <p>
                    <label>
                        Aktivität:<br />
                        <select id='activity' name='activity'>
                            <option value='ski'>Ski</option>
                            <option value='schlitteln'>Schlitteln</option>
                            <option value='bergrestaurant'>Bergrestaurant</option>
                        </select>
                    </label>
                </p>


                <hr />

                <label>
                    Übernachtung: <input type='checkbox' name='overnight' checked={overnight} onChange={(e) => setOvernight(e.target.checked)} />
                </label>
                <hr />

                <p style={{visibility:overnight ? 'visible' : 'hidden'}}>
                    Abreise:
                    <label>
                        {overnight ? <input type='radio' name='abreise' value='car' /> : null}
                        Carfahrt am Samstagmorgen
                    </label>
                    <label>
                        <input type={overnight ? 'radio' : 'hidden'} name='abreise' value='individuell' />
                        individuell
                    </label>
                </p>
                <hr />


            </div>
            <button type='submit'>submit</button>
        </form>
    );
}

export default App;
