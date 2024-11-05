import React from 'react'

export const Mob = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
      <div className="card shadow-sm" style={{ width: "18rem" }}>
        <div className="card-body text-center">
          <img
            src={image}
            alt={name}
            className="rounded-circle mb-3"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">{job}</p>
        </div>
      </div>
    </div>
  )
}
