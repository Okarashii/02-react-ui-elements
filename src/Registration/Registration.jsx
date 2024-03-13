import React, {useState} from "react";
import "./Registration.css";

export default function Registration({title, departments, activity}) {
    
    // O_o => states
    const [overnight, setOvernight] = useState(false);

    // O_o => fncs

    return (
        <div className="FormDiv">
            <form>
                <div className="FormContent">

                    <h3>{title}</h3>
                    <h4>Registration</h4>
                    <hr />
                    
                    <h4>Personalien:</h4>

                    <div className="FormBlock">
                        Anrede:<br />
                        <label>
                            <input type="radio" name="anrede" value="herr" />
                            Herr
                        </label>
                        <label className="PadLeft">
                            <input type="radio" name="anrede" value="frau" />
                            Frau
                        </label>
                        <label className="PadLeft">
                            <input type="radio" name="anrede" value="keine" />
                            Keine
                        </label>

                        <br />

                        <label>Vorname:</label><br />
                        <input type="text" id="fname" name="fname" placeholder="Vorname" /><br />

                        <label>Nachname:</label><br />
                        <input type="text" id="lname" name="lname" placeholder="Nachname" />
                    </div>
                    
                    <div className="FormBlock">
                        Abteilung:<br />

                        <select id="departmentID" name="department">

                            {departments.map((i) => (
                                <option value={i.toLowerCase()} key={i}>{i}</option>
                            ))}

                        </select>
                    </div>

                    <hr />
                    <h4>Ausflug Angaben:</h4>
                    
                    <div className="FormBlock">
                        Anreise (Hinfahrt Freitagmorgen):<br />
                        <label>
                            <input type="radio" name="anreise" value="carbus" />
                            Carbus
                        </label>
                        <label className="PadLeft">
                            <input type="radio" name="anreise" value="individuell" />
                            individuell
                        </label>
                    </div>
                    
                    <div className="FormBlock">
                        Aktivität:<br />
                        <select id="activity" name="activity">
                            {activity.map((i) => (
                                <option value={i.toLowerCase()} key={i}>{i}</option>
                            ))}
                        </select>
                    </div>

                    <div className="FormBlock">
                        <label>
                            Übernachtung: <input type="checkbox" name="overnight" checked={overnight} onChange={(e) => setOvernight(e.target.checked)} />
                        </label>
                    </div>

                    <div className="FormBlock" style={{visibility:overnight ? "visible" : "hidden"}}>
                        Abreise (Rückfahrt Samstagmorgen):<br />
                        <label>
                            {overnight ? <input type="radio" name="abreise" value="carbus" /> : null}
                            Carbus
                        </label>
                        <label className="PadLeft">
                            <input type={overnight ? "radio" : "hidden"} name="abreise" value="individuell" />
                            individuell
                        </label>
                    </div>

                </div>

                <hr />
                <button type="submit">Registrierung absenden</button>
                <button type="reset" onClick={() => setOvernight(false)}>Registrierung zurücksetzen</button>
            </form>
        </div>
    );


}