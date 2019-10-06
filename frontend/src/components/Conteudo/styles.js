import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  section#devs{
    margin: 10px;
    background: #0793CC;
    padding: 20px;
    border-radius: 20px 0 0 0;
    h3{
      color: #fff;
      font-weight: 400;
      border-bottom: 3px solid white;
      padding: 5px;
      width: 200px;
      padding-left: 0px
    }
    div{
      display: flex;
      flex-direction: row;
      padding: 13px 0;
      aside{
        color: #fff;
        padding: 15px 0 0 15px;
        
      }
      
      p.posicao{
        font-size: 2.5em;
        padding-top: 15px;
        color: #fff;
        padding-right: 3px;
      }
     
      img{
        width: 60px;
        border-radius: 50px;
      }
    }
  }
  section#projetos{
    
    margin: 10px;
    background: #0793CC;
    padding: 20px;
    border-radius: 0 20px 0 0;
    h3{
      color: #fff;
      font-weight: 400;
      border-bottom: 3px solid white;
      padding: 5px;
      width: 150px;
      padding-left: 0px
    }
    div{
      margin: 10px 0;
      display: flex;
      flex-direction: row;
    }
    div img{
      width: 50%;
    }
    aside{
      padding-left: 7px;
    }
    h4{
      color: #fff;
      font-size: 1.3em;
      padding: 4px;
      font-weight: 400;
      
      
    }
    p{
      color: #f5f5f5;
      padding-left: 3px;
    }

    
  }
  section#emformacao{
    h3{
      color: #fff;
      font-weight: 400;
      border-bottom: 3px solid white;
      padding: 5px;
      width: 250px;
      padding-left: 0px
    }
  }
  
`;
