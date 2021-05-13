import React from "react";

const Photo = props => {
  const { data } = props
  return (
    <div>
      <img className="img-style" src={data.hdurl} alt={data.mediaType} />
    </div>
  )
}

export default Photo;