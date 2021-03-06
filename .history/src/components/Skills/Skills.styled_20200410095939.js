import styled from 'styled-components'

export const SkillsContainer = styled.section`
  padding: 1rem;
  background-color: #F2F3F5;

  ul {
    display: flex;
    overflow-x: auto; 
    flex-wrap: nowrap;
    align-items: center;

    li {
      list-style-type: none;
      margin: 0 1rem;
      flex: 0 0 auto;
      font-size: 1.3rem;
      text-align: center;
      font-weight: 300;
    }
  }
`