import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apikey = import.meta.env.VITE_MOVIE_KEY;

  const [apiData, setApiData] = useState({
    key: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apikey}`,

    },
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((response) => setApiData(response.results[0]))
    .catch((err) => console.error(err));
  return (
    <>
      <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center py-8 px-12">
        <p class="absolute left-0 top-10 bg-black rounded-full p-2">
          <IoMdArrowRoundBack
            className="text-white text-2xl"
            onClick={() => {
              navigate(-2);
            }}
          />
        </p>
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          frameborder="0"
          class="w-full h-full border-none"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Player;
