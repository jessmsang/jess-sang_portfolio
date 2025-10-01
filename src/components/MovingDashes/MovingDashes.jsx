import "./MovingDashes.css";

export default function MovingDashes({
  color = "#804f45",
  dashLength = 20,
  gapLength = 20,
  thickness = 3,
  speed = 4,
  direction = "normal", // "normal" or "reverse"
}) {
  const style = {
    "--dash-color": color,
    "--dash-length": `${dashLength}px`,
    "--gap-length": `${gapLength}px`,
    "--line-thickness": `${thickness}px`,
    "--animation-speed": `${speed}s`,
    "--animation-direction": direction,
  };

  return <div className="moving-dashes" style={style}></div>;
}
