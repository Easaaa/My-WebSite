import styled from 'styled-components'

export const AboutContainer = styled.section`
  padding: 0 2rem;
  display: grid; 
  place-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  grid-template-areas: 
     "text"
     "img"
     "text" ;
`

export const Text = styled.p`
    color: #61626d;
    padding: 2rem 0;
    text-align: start;
    font-weight: 200;
    line-height:35px;
    font-size: 1.3rem;

    @media (min-width: 600px) {
      line-height: 2.7rem;
     }
`

export const ImageStyled = styled.img`
  width: 280px;
  border-radius: 38% 75% 44% 98%;
  height: 280px;
  object-fit: cover;
  background-color: #c1d6ff;
  place-self: center;

  @media (min-width: 600px) {
    margin: 3rem 0;
  }
`