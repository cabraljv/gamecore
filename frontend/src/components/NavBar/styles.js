import styled from 'styled-components';

export const Container = styled.div`
  background: #333333;
  height: 130px;
  display: flex;
  div{
    border-right: 1px solid #B2ACAC;
    padding: 10px;
    padding-right: 20px;
    height: 70px;
    margin-top: 60px;
    margin-left: 10%;
        img{
      height: 40px;
    }
  }
  nav{
    ul{
      display: flex;
      margin-top: 75px;
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
    }
  }
  section{

    display: flex;
    margin-left: auto;
    margin-right: 10%;
    margin-top: 40px;
    height: 90px;
    img{
      padding: 5px;
      margin: 5px;
      cursor: pointer;
      
    }
    button{
      height: 60%;
      margin: auto;
      width: 130px;
      background: #fff;
      border: none;
      border-radius: 10px;
      color: #000;
      font-size: 1.7em;
      font-family: Economica;
      font-weight: bold;
      box-shadow: 4px 4px 4px rgba(0,0,0,0.4);
      cursor: pointer;
    }
    button:hover{
      background: #f5f5f5;
    }
  }
  
`;
