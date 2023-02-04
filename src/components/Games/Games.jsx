import("./Games.css");
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Games({ games }) {
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState("");

  const [slicedGames, setSlicedGames] = useState([]);

  useEffect(() => {
    if (games) {
      setSlicedGames(games.slice(0, 20));

      if (games.length <= 20) {
        setHasMore(false)
      }
      else { setHasMore(true)}
    }
    
  }, [games]);

  const nextGames = () => {
    if (games) {
      setLoading("Loading..");
      setTimeout(() => {
        setSlicedGames(games.slice(0, slicedGames.length + 20));
      }, 1000);
      if (slicedGames.length >= games.length) {
        setHasMore(false);
      }
    }
  };

  if (!games) return <div className="search-message"></div>;

  return (
    <div className="games-container">
      <InfiniteScroll
        dataLength={slicedGames.length} //This is important field to render the next data
        next={nextGames} // Add more games to array
        hasMore={hasMore}
        loader={
          <p
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            {loading}
          </p>
        }
      >
        <div className="games-wrapper">
          {slicedGames.map((game, index) => {
            return (
              <div className="game-card" key={index}>
                <img src={game.thumbnail} alt="gameImg" />
                <div style={{ fontWeight: "bold" }}>{game.title}</div>
                <div>{game.publisher}</div>
                <a style={{ fontStyle: "italic" }} href={game.game_url}>
                  More info
                </a>
                <div className="detail">
                  <div>{game.genre}</div>
                  <div>{game.platform} </div>
                </div>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}
