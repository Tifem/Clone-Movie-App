import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Search = () => {
    const [movie, setMovie] = useState('')
    const [result, setResult] = useState([])

    const handleSubmit = ((e) =>{
        e.preventDefault();

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDNhODg5MGRkNjlmNTdhOTZjMjYxMDc5YWU5MTkzYyIsIm5iZiI6MTcyNDY2NTk1NC43NDI4NjYsInN1YiI6IjY2YzVjMDk5YWE2ZDI0ZDVmNmFkZGYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rHqwfzJtE2XWmtTC4oABAVjP44HoTSuY1JXDF9K2Ecs",
          },
        };

        fetch(
          `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
          options
        )
          .then((response) => response.json())
          .then((response) => setResult(response.results))
          .catch((err) => console.error(err));
    })


  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-2 pt-20">
          <input
            type="text"
            value={movie}
            onChange={(e) => {
              setMovie(e.target.value);
            }}
            placeholder="Search for a movie..."
            className="px-4 py-2 w-1/2 border border-gray-600 rounded outline-none "
          />
          <button className="bg-black text-white px-9 py-2 rounded ml-2 text-xl">
            Search
          </button>
        </div>
      </form>
      <h1 className="text-center mt-8 text-2xl">Search results:</h1>

      <div className="cards-grid sm:grid sm:grid-cols-2 space-y-3 sm:space-y-0  gap-6 lg:grid-cols-4">
        {result.map((card, index) => (
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
    </>
  );
}

export default Search