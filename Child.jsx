import React from 'react'

export const Child = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <img src={props.image} alt="img" />
    </div>
  )
}
