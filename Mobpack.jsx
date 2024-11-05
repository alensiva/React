import React from 'react'
import {Mobpack} from './Mob'
const people = [
    { id: 1, name: 'Adam Jonson', title: 'Developer', image: img },
    { id: 2, name: 'Linda Larson', title: 'Manager', image:img},
    { id: 3, name: 'Marry Hudson', title: 'Designer', image: img },
    { id: 4, name: 'Nina Hudson', title: 'Designer', image: img },
    { id: 5, name: 'Margo Larson', title: 'Manager', image: img },
    { id: 6, name: 'Nicole Scavo', title: 'Manager', image: img }
  ];
export const Mobpack = () => {
  return  (
    <div className="profile-grid">
    {people.map(person => (
      <div key={person.id} className="profile-card">
        <div className="profile-image">
          <img src={person.image} alt={person.name} />
        </div>cm
        <h3>{person.name}</h3>
        <p>{person.title}</p>
      </div>
    ))}
  </div>
  )
}

