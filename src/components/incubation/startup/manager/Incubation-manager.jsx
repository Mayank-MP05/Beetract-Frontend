import React from "react";
import AppCard from "./card/app-card";

export default function IncubationManager({ option }) {
  return (
    <div>
      <h1>{option}</h1>
      <AppCard />
      <AppCard />
      <AppCard />
      <AppCard />
    </div>
  );
}
