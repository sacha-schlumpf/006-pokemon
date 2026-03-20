const Card = ({ name, hp }) => {
  return (
    <>
      <div
        style={{
          width: 60,
          height: 120,
          backgroundColor: "beige",
          borderRadius: 4,
          margin: 4,
        }}
      >
        {name} {hp}
      </div>
    </>
  );
};

export default Card;
