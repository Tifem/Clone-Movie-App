import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Card = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const apikey = import.meta.env.VITE_MOVIE_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apikey}`,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="cards-wrap py-20 flex px-10 flex-col bg-slate-50">
        <h2 className="text-center text-3xl p-5 text-red-600">
          Title: {title ? title : "Now Playing"}
        </h2>
        <div className="cards-grid sm:grid sm:grid-cols-2 space-y-3 sm:space-y-0  gap-6 lg:grid-cols-4">
          {apiData.map((card, index) => (
            <Link
              to={`/player/${card.id}`}
              className="card bg-white p-5 flex flex-col  shadow rounded"
              key={index}
            >
              <img
                src={`https://image.tmdb.org/t/p/w400` + card.backdrop_path}
                alt=""
              />
              <div>
                <h2 className="title">
                  Title: <span>{card.original_title}</span>
                </h2>
                <h2 className="title">
                  Release Date: <span>{card.release_date}</span>
                </h2>
              </div>
              <div className="xl:flex justify-between items-center">
                <h2 className="title">
                  Language: <span>{card.original_language}</span>
                </h2>
                <div>
                  <p className="text-base font-bold mb-0 w-fit text-white bg-black px-3 rounded-2xl">
                    {card.vote_average.toFixed(1)}
                  </p>
                </div>
              </div>

              {/* <div className="avaerage-note absolute right-5  bottom-10 bg-black text-white p-2 rounded-full"></div> */}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
