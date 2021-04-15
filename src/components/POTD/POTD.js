import React from "react";
import './POTD.css'

const Photo = props => {
  const { data } = props
  return (
    <div>
      <img className="img-style" src={data.hdurl} alt={data.mediaType} />
    </div>
  );
};

export default Photo;
