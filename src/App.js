import './App.css';
import Clock from './Clock';
import Weather from './Weather';



function App() {
  return (
    <div className="App">
      <div className='greeting animated-greeting'>Hello, Ethan</div>

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
