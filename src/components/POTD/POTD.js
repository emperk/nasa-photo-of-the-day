import React from "react";
import './POTD.css'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 75%;
  margin-top: 4%;
`

const Photo = props => {
  const { data } = props
  return (
    <div>
      <StyledImg className="img-style" src={data.hdurl} alt={data.mediaType} />
    </div>
  );
};

export default Photo;
