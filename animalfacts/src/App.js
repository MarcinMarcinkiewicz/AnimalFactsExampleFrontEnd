import { Link } from "react-router-dom";

//Colour palate = turquois: #40E0D0, medium aquamarine: #68E7B0, light green: #90EE90, Cedar Chest: #DB504A

function App() {
  return (
      <div className="App">
        <h1>Welcome to your new home</h1>
        <Link to="/support">Support</Link> |{" "}
        <Link to="/aboutUs">About us</Link>
      </div>
  );
}

export default App;
