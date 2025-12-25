// Import the Player component used to display a single player card
import Player from "./Player";

// Import the players data array
import players from "./players";

// Import Bootstrap layout components
import { Container, Row } from "react-bootstrap";

// PlayersList component renders a list of Player components
function PlayersList() {
  return (
    // Bootstrap Container centers and adds padding to the content
    <Container>
      
      {/* Row used as a flex container to align player cards */}
      <Row style={{ display: "flex", justifyContent: "center" }}>
        
        {/* Loop through the players array and render a Player for each item */}
        {players.map((player, index) => (
          // Spread operator (...) passes all player properties as props
          // key is required by React to uniquely identify each component
          <Player key={index} {...player} />
        ))}

      </Row>
    </Container>
  );
}

// Export PlayersList so it can be used in App.jsx
export default PlayersList;
