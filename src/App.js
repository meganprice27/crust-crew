import './App.css';
import deliveryScooter from "./images/deliveryScooter.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Crust Crew</h1>
       <img src={deliveryScooter} alt="Pizza delivery person riding on a scooter" className="homePageImage"></img>
       <h4>Delicious neopolitan pizza delivered straight to your door!</h4>
       <button>ORDER NOW</button>
      </header>
    </div>
  );
}

export default App;
