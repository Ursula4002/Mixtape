import React from "react";

export const Song = ({ artist, genre, name, year }) => {
  return (
    <li className="song">
      <div className="contents">
        <h2 className="name">{name}</h2>
        <div className="details left">
          <h3 className="artist">{artist}</h3>
        </div>
        <aside className="details right">
          <p className="genre">{genre}</p>
          <p className="year">{year}</p>
        </aside>
      </div>
    </li>
  );
};
