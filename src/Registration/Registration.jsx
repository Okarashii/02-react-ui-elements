import {useState} from "react";
import "./Registration.css";

export default function Registration({title, departments, activities}) {
    
    // O_o => states
    const [pronouns, setPronouns] = useState("keine");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [department, setDepartment] = useState("");
    const [arrival, setArrival] = useState("individual");
    const [activity, setActivity] = useState("keine");
    const [overnight, setOvernight] = useState(false);
    const [departure, setDeparture] = useState("individual");

    // O_o => fncs
    function onSubmit() {
        console.log("pronouns", pronouns);
        console.log("firstname", firstname);
        console.log("lastname", lastname);
        console.log("department", department);
        console.log("arrival", arrival);
        console.log("activity", activity);
        console.log("overnight", overnight);
        console.log("departure", departure);
    }

    function onReset() {
        setPronouns("keine");
        setFirstname("");
        setLastname("");
        setDepartment("");
        setArrival("individual");
        setActivity("");
        setOvernight(false);
        setDeparture("individual");
    }

    return (
        <div className="FormDiv">
            <form onSubmit={onSubmit}>
                <div className="FormContent">

                    <h2>{title}</h2>
                    <h3>Registration</h3>
                    <hr />
                    
                    <h4>Personalien:</h4>

                    <div className="FormBlock">
                        Anrede:<br />
                        <label>
                            <input type="radio" name="anrede" value="herr" onClick={(e) => setPronouns(e.target.value)}/>
                            Herr
                        </label>
                        <label className="PadLeft">
                            <input type="radio" name="anrede" value="frau" onClick={(e) => setPronouns(e.target.value)}/>
                            Frau
                        </label>
                        <label className="PadLeft">
                            <input type="radio" name="anrede" value="keine" onClick={(e) => setPronouns(e.target.value)} defaultChecked/>
                            Keine
                        </label>

                        <br />

                        <label>Vorname:</label><br />
                        <input type="text" id="fname" required name="fname" placeholder="Vorname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/><br />

                        <label>Nachname:</label><br />
                        <input type="text" id="lname" required name="lname" placeholder="Nachname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                    </div>
                    
                    <div className="FormBlock">
                        Abteilung:<br />

                        <select id="departmentID" name="department" value={department} required>
                            <option selected disabled value="">Bitte Abteilung auswählen</option>
                            {departments.map((i) => (
                                <option value={i.toLowerCase()} key={i} onClick={(e) => setDepartment(e.target.value)}>{i}</option>
                            ))}

                        </select>
                    </div>

                    <hr />
                    <h4>Ausflug Angaben:</h4>
                    
                    <div className="FormBlock">
                        Anreise (Hinfahrt Freitagmorgen):<br />
                        <label>
                            <input type="radio" name="anreise" value="reisecar" onClick={(e) => setPronouns(e.target.value)}/>
                            Reisecar
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="anreise" value="individuell" onClick={(e) => setPronouns(e.target.value)} defaultChecked/>
                            individuell
                        </label>
                    </div>
                    
                    <div className="FormBlock">
                        Aktivität:<br />
                        <select id="activity" name="activity">
                            <option selected disabled value="">Bitte Aktivität auswählen</option>
                            {activities.map((i) => (
                                <option value={i.toLowerCase()} key={i} onClick={(e) => setActivity(e.target.value)}>{i}</option>
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
                        <label className="MargRight">
                            {overnight ? <input type="radio" name="abreise" value="reisecar" onClick={(e) => setDeparture(e.target.value)}/> : null}
                            Reisecar
                        </label>
                        <br />
                        <label className="MargRight">
                            <input type={overnight ? "radio" : "hidden"} name="abreise" value="individuell" onClick={(e) => setDeparture(e.target.value)} defaultChecked/>
                            individuell
                        </label>
                    </div>


                    <hr />
                    <button type="submit">Registrierung absenden</button>
                    <button type="reset" onClick={onReset} style={{marginLeft: '10px'}}>Registrierung zurücksetzen</button>
                </div>
            </form>
        </div>
    );


}