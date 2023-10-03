import React, { useState } from "react";
/**
 * Draw a dot on mouse click
 */
interface Dot {
  x: number;
  y: number;
}
const DrawDot = () => {
  const [dots, setDots] = useState<Dot[]>([]);

  const getCoordinates = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY;
    const newDot: Dot = { x, y };
    setDots([...dots, newDot]);
  };
  return (
    <div className="draw-dot-container" onClick={(e) => getCoordinates(e)}>
      DrawDot
      {dots.map((dot: any, index: number) => (
        <div
          key={index}
          className="dot"
          style={{ left: dot.x, top: dot.y }}
        ></div>
      ))}
    </div>
  );
};

export default React.memo(DrawDot);
