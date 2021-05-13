import React from "react";
import styled from "styled-components";

const POTDh1 = styled.h1`
  font-size: 2.5em;
  font-family: 'Roboto Mono';
`

export default function Header() {
  return (
    <div>
      <POTDh1>NASA Photo of the Day</POTDh1>
    </div>
  )
}