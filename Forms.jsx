import React, { useState } from 'react';

export const Forms = () => {
  const [data, setData] = useState({});

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data); 
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input onChange={handleChange} name="name" type="text" /><br />

          <label>Age</label>
          <input onChange={handleChange} name="age" type="number" /><br />

          <label>Date of Birth</label>
          <input onChange={handleChange} name="date" type="date" /><br />

          <label>Education</label>
          <input onChange={handleChange} name="education" type="text" /><br />

          <label>Gender</label>
          <input onChange={handleChange} name="gender" type="text" /><br />

          <label>Email</label>
          <input onChange={handleChange} name="email" type="email" /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
