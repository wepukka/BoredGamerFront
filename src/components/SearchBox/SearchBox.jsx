import("./SearchBox.css");
import { useEffect, useState } from "react";
import { apiFetch } from "../../api";
import { DropDownMenu } from "./DropDownMenu/DropDownMenu";
import BoredGamer from "../../../assets/BoredGamer.png";

export default function SearchBox({ setValue }) {
  const platforms = ["pc", "browser"];
  const genres = ["all", "mmorpg", "shooter", "pvp", "mmofps"];

  const [platform, setPlatform] = useState("pc");
  const [genre, setGenre] = useState("mmorpg");

  const fetch = async () => {
    const data = await apiFetch();
    setValue(data);
  };

  return (
    <div className="search-box-container">
      <div className="page-logo">
        <img
          id="boredGamerImg"
          src={BoredGamer}
          alt="bored"
          style={{ width: "150px" }}
        />
      </div>
      <div className="search-box">
        <div className="info">
          <p>
            Are you <strong style={{ fontSize: "17px" }}>Bored Gamer </strong>
            and <strong style={{ fontSize: "17px" }}>Broke? </strong> No
            problem.
          </p>
          <p>
            Try searching
            <strong style={{ fontSize: "17px" }}> F2P </strong>
            games for <strong style={{ fontSize: "17px" }}>pc </strong>
            and <strong style={{ fontSize: "17px" }}>browser</strong>
          </p>
        </div>
        <div className="search-container">
          <div>Platform</div>
          <div>Genre</div>
        </div>
        <div className="search-container">
          <DropDownMenu values={platforms} setValue={setPlatform} />
          <DropDownMenu values={genres} setValue={setGenre} />
          <button
            onClick={() => {
              fetch();
            }}
            className="search-button"
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
