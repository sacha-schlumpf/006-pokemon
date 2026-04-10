import { useState } from "react";
import Card from "./Card";

const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];

const types = [
  "All",
  "Grass",
  "Fire",
  "Water",
  "Electric",
  "Psychic",
  "Normal",
  "Ghost",
  "Dragon",
  "Fighting",
  "Rock",
];

const typeColors = {
  All: "#000000",
  Fire: "#FF6B6B",
  Water: "#6B8EFF",
  Grass: "#7ED321",
  Electric: "#F8D030",
  Psychic: "#8b3d94",
  Normal: "#A33EA1",
  Ghost: "#d9d9d9",
  Dragon: "#95a33e",
  Fighting: "#b7723d",
  Rock: "#888888",
};

const App = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredPokemons =
    selectedType === "All"
      ? pokemons
      : pokemons.filter((pokemon) => pokemon.type === selectedType);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "70%", maxWidth: 1000 }}>
        <div className="title">Pokémon</div>
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 20,
            flexWrap: "wrap",
            justifyContent: "flex-start",
            margin: 0,
          }}
        >
          {types.map((type) => (
            <button
              className="selection"
              key={type}
              onClick={() => setSelectedType(type)}
              style={{
                background:
                  selectedType === type ? typeColors[type] : "#f2f1ea",
                color: selectedType === type ? "white" : "black",
              }}
            >
              {type}
            </button>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            paddingTop: 20,
          }}
        >
          {filteredPokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              hp={pokemon.hp}
              attack={pokemon.attack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
