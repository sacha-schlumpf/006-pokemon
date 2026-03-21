const Bar = ({ width, height, value, color }) => {
  return (
    <div style={{ position: "relative", width: `${width}%`, height: height }}>
      <div
        style={{
          position: "absolute",
          width: `${width}%`,
          height: height,
          backgroundColor: "lightgray",
          borderRadius: 4,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: `${(value * width) / 160}%`,
          height: height,
          backgroundColor: color,
          borderRadius: 4,
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default Bar;
