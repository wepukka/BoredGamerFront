import "./App.css";
import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import Games from "./components/Games/Games";

const URL = "http://localhost:3000/api/testi?data=asd&dnvb=BCVBCV";

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
