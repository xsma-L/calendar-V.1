import {useState} from 'react';
import Calendar from 'react-calendar';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  
  return (
    <div className="App">
      <h1 className='header'>React Calendar with Range</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} selectRange={true}/>
      </div>
      { date[0] ? (
        <p>
          <span>Du :</span>{''} {date[0].toLocaleDateString('fr-FR', {weekday: 'long', year: 'numeric', month:'long', day:'numeric'})}
          &nbsp; &nbsp;
          <span>Au :</span> {date[1].toLocaleDateString('fr-FR', {weekday: 'long', year: 'numeric', month:'long', day:'numeric'})}
        </p> 
      ) : (
        <p>
          <span>Date par défaut :</span>{''} {date.toLocaleDateString('fr-FR', {weekday: 'long', year: 'numeric', month:'long', day:'numeric'})}
        </p>
      )}
    </div>
  );
}

export default App;
