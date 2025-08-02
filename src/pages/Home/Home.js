import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

import { usePopularMovies } from "../../hooks/usePopularMovies";


function Home() {
  const { data: popularMovies = [], isLoading, isError, error } = usePopularMovies();
  console.log("popularMovies", popularMovies);
  return (
    <div>
      <div className="poster">
        {isLoading ? (
          <div>Loading popular movies...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <Carousel
            showThumbs={false}
            autoplay={true}
            transitionTime={1}
            infiniteLoop={true}
            showStatus={false}
          >
            {popularMovies.map((movie) => (
              <Link
                key={movie.id}
                style={{ textDecoration: "none", color: "white" }}
                to={`/movie/${movie.id}`}
              >
                <div className="posterImage">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className="posteImage_overlay">
                  <div className="posterImage_runtime">
                    <div className="posterImage_title">
                      {movie ? movie.title : ""}
                    </div>
                    {movie ? movie.release_date : ""}
                    <div className="posterImage_rating">
                      Ratings:
                      {movie ? movie.vote_average : ""}
                      <i className='fas fa-star' />{" "}
                    </div>
                  </div>
                  <div className="posterImage_description">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default Home;
