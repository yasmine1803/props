// Import React so we can create a functional component using JSX
import React from "react";

// Import the Card component from react-bootstrap for UI styling
import { Card } from "react-bootstrap";

// Player component receives props via object destructuring
function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  image,
}) {
  return (
    // Bootstrap Card wrapper with custom width and margin
    <Card style={{ width: "18rem", margin: "1rem" }}>
      
      {/* Player image displayed at the top of the card */}
      <Card.Img
        variant="top"
        src={image}   // Image URL passed as a prop
        alt={name}    // Alt text for accessibility
      />

      {/* Card body contains textual information */}
      <Card.Body>

        {/* Player name shown as the card title */}
        <Card.Title>{name}</Card.Title>

        {/* Player details */}
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey:</strong> #{jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

// Default props are used when no values are passed from the parent component
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "/placeholder.png", // Fallback image
};

// Export the component so it can be used in other files
export default Player;
