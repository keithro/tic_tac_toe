import { useState } from "react";
import NewGameMenu from "./Pages/NewGameMenu/NewGameMenu";
import Game from "./Pages/Game/Game";
import "./App.scss";

function App() {
  const [isPlaying, updateIsPlaying] = useState(false);
  const [playerMark, updatePlayerMark] = useState("x");
  const [gameType, updateGameType] = useState(null);

  return (
    <div className="App">
      {isPlaying || <NewGameMenu />}
      {isPlaying && <Game />}
    </div>
  );
}

export default App;
