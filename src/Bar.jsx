const Bar = ({ width, height, value, color }) => {
  return (
    <div style={{ position: "relative", width: `${width}%`, height: height }}>
      <div
        style={{
          position: "absolute",
          width: `${width}%`,
          height: `${height}px`,
          backgroundColor: "rgba(99, 99, 99, 0.2)",
          borderRadius: 4,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: `${(value * width) / 160 - 10}%`,
          height: `${height / 2}px`,
          backgroundColor: color,
          borderRadius: 4,
          zIndex: 2,
          top: `${height / 4}px`,
          left: `${height / 4}px`,
        }}
      />
    </div>
  );
};

export default Bar;
