import styled from 'styled-components'
import { Link } from "gatsby"

export const LayoutContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const NavContainer = styled.nav`
  padding: 1rem;
`
export const NavList = styled.ul`
  
  display: flex;
  justify-content: flex-end;

  li {
    list-style-type: none;
    margin: 0 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`

export const StyledLink = styled(Link)`
 text-decoration: none;
 box-shadow: none;
 cursor: pointer;
`