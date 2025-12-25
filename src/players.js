// Array that holds all player data
// Each object represents ONE player
const players = [
  {
    // Full name of the player
    name: "Isagi Yoichi",

    // Team the player currently plays for
    team: "Blue Lock Eleven",

    // Player's nationality
    nationality: "Japanese",

    // Jersey number worn by the player
    jerseyNumber: 11,

    // Player's age
    age: 16,

    // Path to the player's image (stored in the public folder)
    image: "/isagi.jpeg",
  },
  {
    name: "Itoshi Rin",
    team: "Blue Lock Eleven",
    nationality: "Japanese",
    jerseyNumber: 10,
    age: 17,
    image: "/rin.jpeg",
  },
  {
    name: "Bachira Meguru",
    team: "FC Barcha",
    nationality: "Japanese",
    jerseyNumber: 8,
    age: 16,
    image: "/bachira.jpeg",
  },
  {
    name: "Nagi Seishiro",
    team: "Manshine City",
    nationality: "Japanese",
    jerseyNumber: 7,
    age: 16,
    image: "/nagi.jpeg",
  },
];

// Export the players array so it can be imported in App.jsx
// Example: import players from "./players";
export default players;
