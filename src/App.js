import './App.css';
import Clock from './Clock';
import Weather from './Weather';

const today = new Date().toLocaleDateString(undefined, {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});


function App() {
  return (
    <div className="App">
      <div className='greeting animated-greeting'>Hello, Ethan</div>
      <div className="date">{today}</div>

<div className="widget">
  <Clock />
</div>

<div>
  <Weather />
</div>

    </div>


  );
}

export default App;
