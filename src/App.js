import Registration from './Registration/Registration';
import './App.css';

function App() {

    const title = "Ausflugstag Skitag 2024";
    const departments = ["IT", "HR", "Marketing", "Buchhaltung"];
    const activities = ["Ski", "Schlitteln", "Bergrestaurant"];
    
    return (<Registration title={title} departments={departments} activities={activities}/>);

}

export default App;
