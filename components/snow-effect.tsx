"use client";

import React from "react";
import Snowfall from "react-snowfall";

export default function SnowEffect() {
  return (
    <Snowfall
      // Brought back to the foreground, but allows clicks to pass through
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 10,
        pointerEvents: "none",
      }}
      snowflakeCount={100} // Total number of snowflakes
      color="#ffffff"      // Color of the snow[cite: 1]
      speed={[1.0, 3.2]}   // Slightly faster vertical speed (was [0.5, 2.5])
      wind={[0.5, 2.5]}    // Pushed rightward for a more noticeable slant (was [-0.5, 1.5])
      radius={[0.5, 3.0]}  // Min and max snowflake size in pixels[cite: 1]
    />
  );
}