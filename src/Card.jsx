import Bar from "./Bar";

const typeColors = {
  fire: "#FF6B6B",
  water: "#6B8EFF",
  grass: "#7ED321",
  electric: "#F8D030",
  poison: "#c34a92",
  psychic: "#8b3d94",
  normal: "#A33EA1",
  ghost: "#d9d9d9",
  dragon: "#95a33e",
  fighting: "#b7723d",
  rock: "#888888",
  // Add more types and colors as needed
};

const Card = ({ id, name, type, hp, attack }) => {
  return (
    <>
      <div className="card">
        <div id="pokemon-name">{name}</div>
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          ></img>
        </div>
        <div
          style={{
            display: "inline-block",
            padding: "2px 8px",
            borderRadius: "12px",
            backgroundColor: typeColors[type.toLowerCase()] || "#cccccc",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            margin: "8px 0",
          }}
        >
          {type}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "16px",
          }}
        >
          <div>
            <p class="bar-title">HP</p>
            <Bar width={100} height={12} value={hp} color="#44A194" />
          </div>
          <div>
            <p class="bar-title">Attack</p>
            <Bar width={100} height={12} value={attack} color="#c85442" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
