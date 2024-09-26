import React from "react";
import styled from 'styled-components'

const StyledHeader = styled.div`

  /* text-shadow: 0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px; */
`
const StyledH1 = styled.h1`
  margin-top: 4%;
  font-family: 'Roboto Mono';
  font-size: 5em;
  letter-spacing: 0px;
  word-spacing: -11px;
`

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>NASA Photo of the Day</StyledH1>
    </StyledHeader>
  );
}

// const Header = () => {
//   return (
//     <div>
//       <h1>NASA Photo of the Day</h1>
//     </div>
//   );
// };

// export default Header;
