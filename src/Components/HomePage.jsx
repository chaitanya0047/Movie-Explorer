import React, { useState, useEffect } from "react";
import Input from "./Input.jsx";
import Tribute from "./Tribute.jsx";
import NotFound from "./NotFound.jsx";
import ResultsPagination from "./AppPagination.jsx";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const itemsPerPage = 4;

  const handleSearch = () => {
    setSubmittedQuery(searchQuery);
  };

  useEffect(() => {
    if (submittedQuery) {
      const fetchMovieData = async () => {
        setNotFound(false);
        const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
        const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${submittedQuery}`;
        try {
          const response = await fetch(url);
          const data = await response.json();

          if (data.Response === "True" && data.Search) {
            setMoviesList(data.Search);
          } else {
            setMoviesList([]);
            setNotFound(true);
          }
        } catch (err) {
          console.error("API fetch failed:", err);
          setMoviesList([]);
          setNotFound(true);
        }
      };

      fetchMovieData();
    }
  }, [submittedQuery]);

  const renderContent = () => {
    if (!submittedQuery) {
      return <Tribute />;
    }
    if (notFound) {
      return <NotFound />;
    }
    return (
      <ResultsPagination
        submittedQuery={submittedQuery}
        moviesList={moviesList}
        setMoviesList={setMoviesList}
        itemsPerPage={itemsPerPage}
      />
    );
  };

  return (
    <>
      <section className="hero-section">
        <img
          src="./src/assets/Images/BrandLogo.png"
          alt="PVR Cinemas Logo"
          className="brandlogo"
        />
        <div className="hero-heading">
          <p className="hero-tagline">Find Your Favorite Movie</p>
          <h2 className="hero-title">PREMIUM</h2>
        </div>
        <div className="divider"></div>

        <Input
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearchClick={handleSearch}
        />
      </section>

      {renderContent()}
    </>
  );
};

export default HomePage;
