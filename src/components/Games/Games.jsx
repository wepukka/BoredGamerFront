import("./Games.css");

export default function Games({ games }) {
  if (!games.data) return <div className="search-message"></div>;

  return (
    <div className="games-container">
      {games.data.map((game, index) => {
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
  );
}
