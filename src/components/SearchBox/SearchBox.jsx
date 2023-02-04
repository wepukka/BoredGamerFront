import("./SearchBox.css");
import { useEffect, useState } from "react";
import { apiFetch } from "../../api";
import { DropDownMenu } from "./DropDownMenu/DropDownMenu";
import BoredGamer from "../../../assets/BoredGamer.png";

import { platforms, genres } from "../../../assets/gameTypes";

export default function SearchBox({ setValue }) {
  const [platform, setPlatform] = useState(platforms[0]);
  const [genre, setGenre] = useState(genres[0]);

  const fetch = async () => {
    const data = await apiFetch(platform, genre);
    setValue(data);
  };

  const TopParagraph = () => {
    return (
      <div className="top-par">
        <p>
          Are you <strong style={{ fontSize: "17px" }}>Bored Gamer </strong>
          and <strong style={{ fontSize: "17px" }}>Broke? </strong> No problem.
        </p>
        <p>
          Try searching
          <strong style={{ fontSize: "17px" }}> F2P </strong>
          games for <strong style={{ fontSize: "17px" }}>pc </strong>
          and <strong style={{ fontSize: "17px" }}>browser</strong>
        </p>
      </div>
    );
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
          <TopParagraph />
        </div>

        <div className="search-container">
          <div className="search-row">
            <div className="media-350px-display-toggle">Platform</div>
            <div className="media-350px-display-toggle">Genre</div>
          </div>
          <div className="search-row">
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
    </div>
  );
}
