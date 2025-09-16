import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', color: 'red', marginTop: '50px' }}>
      <h1>Movie Not Found</h1>
      <p>Sorry, we couldn't find any movies matching your search. Please try again.</p>
    </div>
  );
};

export default NotFound;