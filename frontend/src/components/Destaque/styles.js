import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  overflow: hidden;
  
`
export const Background = styled.div`
  
  width: 100%;
  min-width: 500px;
  max-height: 400px;
  overflow-x: hidden;
  z-index: 1;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  background-image: url(${params => params.bg});
  
   
  img{
    width: 35%;
    min-width: 250px;
    margin: 50px;
    
    
  }
  aside{
    
    height: 100%;
    margin-top: 50px;
    margin-right: 30px;
    
    h3{
      color: #fff;
      font-size: 2em;
      padding-bottom: 15px;
    }
    p{
      color: #fff;
      font-size: 1.3em;
    }
  }
  
`;

