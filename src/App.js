import "./App.css";
import "./styles/globals.css";
import Event from "./event/Event";
import NavBar from "./navbar/NavBar";

function App() {
  return (
    <div className="App main-wrapper">
      <NavBar />
      <Event />
    </div>
  );
}

export default App;
