import React, { useState } from "react";
import PopUp from "./PopUp";
const Information = (props) => {
  // console.log("props ", props.location.state);
  const [watch, setWatch] = useState([]);
  const [seen, setSeen] = useState(false);
  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
    popularity,
    original_language,
  } = props.location.state;

  const togglePop = () => {
    setSeen(!seen);
  };


  const addWatchList = () => {
    if (!localStorage.getItem("watch")) {
      const movie = [];
      movie.push(props.location.state);
      localStorage.setItem("watch", JSON.stringify(movie));
    } else {
      const movies = JSON.parse(localStorage.getItem("watch"));
      movies.push(props.location.state);
      localStorage.setItem("watch", JSON.stringify(movies));
    }
    setWatch(JSON.parse(localStorage.getItem("watch")));
  };

  return (
    <div className="result">
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />

      <div className="info">
        <p>
          {" "}
          <strong>Title : </strong> {title}{" "}
        </p>

        <div>
          {" "}
          <p>
            {" "}
            <strong>Original Language :</strong> {original_language}
          </p>
        </div>
        <div>
          {" "}
          <p>
            {" "}
            <strong>Overview : </strong>
            {overview}
          </p>
        </div>

        <div>
          {" "}
          <span>
            {" "}
            <strong> Popularity : </strong>
            {popularity}
          </span>
        </div>
        <div>
          {" "}
          <span>
            {" "}
            <strong> Vote Average :</strong> {vote_average}
          </span>
        </div>
        <div>
          {" "}
          <span>
            {" "}
            <strong>Vote Count:</strong> {vote_count}
          </span>
        </div>
        <div>
          {" "}
          <span>
            {" "}
            <strong> Release Date:</strong> {release_date}
          </span>
        </div>
        <div>
          {" "}
          <div className="" onClick={togglePop}>
            {/* <button className="btn-add"  onClick={addFavorite}>Favorite</button> */}
            <button className="btn-add">Favorite</button>
          </div>
          {seen ? (
            <PopUp toggle={togglePop} info={props.location.state} />
          ) : null}
          <button className="btn-add" onClick={addWatchList}>
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
