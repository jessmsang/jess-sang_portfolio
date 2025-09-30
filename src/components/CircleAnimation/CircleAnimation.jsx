import "./CircleAnimation.css";

export default function CircleAnimation({ className = "" }) {
  return (
    <div className={`circle ${className}`}>
      <div className="circle__animation_blurred"></div>
    </div>
  );
}
