import styled from "styled-components"

export const StyledHeader = styled.header`
  padding: 2rem;

  h5 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.mint};
    opacity: 0.5;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.08em;
  }

  h1 {
    margin: 0.2em 0;
    font-size: 2.7rem;
  }

  h4 {
    text-transform: lowercase;
  }
`
