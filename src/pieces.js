import { useState, useRef, useEffect } from "react";

export const Pawn = () => (
  <div style={{ height: "500px", width: "500px" }} className="size">
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="100.000000pt"
      height="100.000000pt"
      viewBox="0 0 225.000000 225.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M1047 2000 c-44 -14 -95 -58 -117 -100 -41 -81 -13 -188 63 -238 l40
                -27 -46 -7 c-105 -15 -210 -101 -242 -199 -24 -71 -17 -179 15 -242 25 -50 83
                -110 126 -129 13 -6 24 -14 24 -17 0 -3 -35 -23 -78 -43 -143 -68 -249 -173
                -317 -313 -53 -110 -66 -177 -63 -318 l3 -122 670 0 670 0 3 122 c3 142 -10
                210 -64 318 -69 142 -174 245 -316 313 -43 20 -78 40 -78 43 0 3 11 11 24 17
                43 19 101 79 126 129 32 63 39 171 15 242 -32 98 -137 184 -242 199 l-46 7 40
                27 c111 73 109 232 -4 311 -34 24 -54 30 -110 33 -37 2 -81 -1 -96 -6z"
        />
      </g>
    </svg>
  </div>
);

export const DraggablePiece = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pressed, setPressed] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

  const onMouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      });
    }
  };

  return (
    <div
      ref={ref}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseMove={onMouseMove}
    >
      <Pawn></Pawn>
    </div>
  );
};
