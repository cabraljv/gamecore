import styled from 'styled-components';

export const Container = styled.nav`
      background: #333;
    display: flex;
    height: 130px;
    padding: 0 10%;
    
    img{
      height: 80px;
      margin-top: 40px;
    }
    ul{
      display: flex;
      margin-top: 60px;
      margin-left: 50px;
      
      li{
        padding: 10px;
        a{
          padding: 10px;
          
          border-radius: 2px;
          text-decoration: none;
          font-family: Economica;
          color: #fff;
          font-size: 1.4em;
        }
        a.ativo{
          border-bottom: 2px solid #fff;
        }
      }
      li#btnNovo{
        
        a{
          color: #333;
          background: #fff;
          border-radius: 5px;
        }
      }
    }
    div{
    margin-left: auto;
    margin-top: auto;
    height: 90px;
    border-radius: 10px;
    width: 110px;
    display: flex;
    text-align: center;
    background: #333;
    transition: background 0.5s;
    section{
      height: 90px;
      margin: 3px;
      img{
        margin-top: 0;
        height: 60px;
      }
      p{
        color: #fff;
      }
      
    
    }
    label{
      height: 10px;
      width: 10px;
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      margin-top: 20px;
      margin-left: 10px;
      transform: rotate(-45deg)

    }
    
    :hover{
      background: #999;

    }
  }
`;
