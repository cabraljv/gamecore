import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  position: absolute;
  overflow: hidden;
  
  section{
    
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  section aside{
    color: #fff;
    position: absolute;
    top: 200;
    left: 0;
    z-index: 5;
    float: left;
  }
`;
export const Background = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1900px;
  overflow-x: hidden;
  min-height: 200px;
  opacity: 0.4;
  
`;

