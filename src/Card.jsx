import Bar from "./Bar";

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
        <div>{type}</div>

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
            <Bar width={100} height="10px" value={hp} color="#44A194" />
          </div>
          <div>
            <p class="bar-title">Attack</p>
            <Bar width={100} height="10px" value={attack} color="#c85442" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
