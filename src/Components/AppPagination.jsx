import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import MovieCard from "./MovieCard.jsx";

const ResultsPagination = ({
  submittedQuery,
  moviesList,
  setMoviesList,
  itemsPerPage = 4,
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [moviesList, submittedQuery]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleMovies = moviesList.slice(startIndex, endIndex);

  return (
    <>
      <MovieCard movies={visibleMovies} />

      {moviesList.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 4,
          }}
        >
          <Pagination
            count={Math.ceil(moviesList.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "var(--color-text)",
              },
              // THE FIX: Added !important to guarantee the override on refresh
              "& .Mui-selected": {
                backgroundColor: "var(--color-primary) !important",
                color:"black"
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "var(--color-primary)",
                color:"black"
              },
              
            }}
          />
        </Box>
      )}
    </>
  );
};

export default ResultsPagination;