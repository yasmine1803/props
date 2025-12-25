// Import the React logo (not used here, but often included by default)
import logo from "./logo.svg";

// Import global styles for the App component
import "./App.css";

// Import the PlayersList component that displays all player cards
import PlayersList from "./PlayersList";

// Main App component (root component of the application)
function App() {
  return (
    // Root wrapper with App CSS class
    <div className="App">
      
      {/* Application title */}
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Blue Lock Player Cards
      </h1>

      {/* Render the list of player cards */}
      <PlayersList />
    </div>
  );
}

// Export App so it can be rendered by ReactDOM
export default App;
