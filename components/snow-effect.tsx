"use client";

import Snowfall from "react-snowfall";

export default function SnowEffect() {
  return (
    <Snowfall
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      snowflakeCount={130}
      color="#ffffff"
      speed={[1.0, 3.2]}
      wind={[0.5, 2.5]}
      radius={[0.5, 3.0]}
    />
  );
}