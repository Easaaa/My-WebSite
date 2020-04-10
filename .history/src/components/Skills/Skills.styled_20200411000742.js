import styled, { keyframes } from 'styled-components'

 export const SkillsContainer = styled.section`
  padding: 2rem 0.5rem; 
  background-color: #F2F3F5;

  ul {
    display: grid;
    align-items: center;

    li {
      list-style-type: none;
      margin: 0 2rem;
      font-size: 1.4rem;
      align-items: center;
      font-weight: 300;
      display: flex;
      flex-direction: column;
      justify-content: center;


      img {
        margin: 1em;
        width: 35px;
        height: 60px;
        position: relative; 
        top: 8px;
      }
    }
  }
` 
