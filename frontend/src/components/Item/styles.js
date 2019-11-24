import styled from 'styled-components';

export const Container = styled.div`
justify-content: center;
overflow: hidden;
  img{
    height: 170px;
    width: 300px;
    border-radius: 10px;
  }
  p{
    font-family: Lato;
    color: #000;
    font-size: 1.3em;
  }
  span{
    display: flex;
    justify-content: space-between;
    p{
      margin-right: auto;
    }
  }
  cursor: pointer;
  :hover{
    img{
      opacity: 0.8;
      background: #000;
    }
  }
`;
