import React, { useState, useEffect } from 'react';

function Apifetching() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
      });
  }, []); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Random User</h1>
      {user && (
        <div>
          <img src={user.picture.large} alt="User Profile" />
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
        </div>
      )}
    </div>
  );
}

export default Apifetching;
