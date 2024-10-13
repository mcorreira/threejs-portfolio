import { HTML, useProgress } from "@react-three/drei";
const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <HTML
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // center the canvas
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}% : Loading...
      </p>
    </HTML>
  );
};
