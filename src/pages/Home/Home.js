import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function Home() {
  const [popularMovies, setpopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setpopularMovies(data.results));
  }, []);
  return (
    <div>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoplay={true}
          transitionTime={1}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posteImage_overlay">
                <div className="posterImage_runtime">
                  {movie ? movie.release_date : ""}
                  <div className="posterImage_rating">
                    Ratings:
                    {movie ? movie.vote_average : ""}
                    <i className='"fas fa-star' />{" "}
                  </div>
                </div>
                <div className='"posterImage_description'>
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
