import './App.css';
import deliveryScooter from "./images/deliveryScooter.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Crust Crew</h1>
       <img src={deliveryScooter}></img>
       <h3>Delicious neopolitan pizza delivered straight to your door!</h3>
       <button>ORDER NOW</button>
      </header>
    </div>
  );
}

export default App;
