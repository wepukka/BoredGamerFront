import "./App.css";
import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import Games from "./components/Games/Games";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    console.log(games);
  }, [games]);

  return (
    <div className="App">
      <SearchBox setValue={setGames} />
      <Games games={games.data} />
    </div>
  );
}

export default App;
