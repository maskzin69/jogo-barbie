import React, { useState } from "react";

import HomeScreen from "./components/HomeScreen";
import GameScreen from "./components/GameScreen";

export default function App() {
  const [genero, setGenero] = useState(null);

  if (genero === null) {
    return (
      <HomeScreen
        onSelectGender={setGenero}
      />
    );
  }

  return (
    <GameScreen
      genero={genero}
      onBackHome={() => setGenero(null)}
    />
  );
}