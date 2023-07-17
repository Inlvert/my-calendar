import logo from "./logo.svg";
import "./App.css";
import Day from "./components/day";
import Calendar from "./components/calendar";

function App() {
  return (
    <div className="App">
      <div className="div1">
        <Day />
      </div>
      <div className="div2">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
