import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  position: absolute;
  overflow: hidden;
  
  section{
    
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    div{
    color: #fff;
    margin: 30px;
    z-index: 10;
    position: relative;
    top:0;
    
    display: flex;
    flex-direction: row;
    
    img{
      width: 500px;
    }
    aside{
      float: right;
      padding: 50px;
      h3{
        font-size: 2.5em;
      }
      p{
        margin-top: 20px;
        font-size: 1.4em;
      }
    }
    }
  }
  
  
`
export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 500px;
  overflow-x: hidden;
  z-index: 5;
  min-height: 200px;
  opacity: 0.4;
  
`;

