import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas shadows camera={{ position: [0, 3, 10], fov: 80 }}>
    <App />
  </Canvas>,
);
