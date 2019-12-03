import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top:0;
  left: 0;
  background: rgba(3,3,3,0.5);
  width: 100%;
  height: 100%;
  display: flex;
  >div{
    margin: auto;
    p{
      color: #fff;
      font-size: 1.3em;
    }
  }
`;
