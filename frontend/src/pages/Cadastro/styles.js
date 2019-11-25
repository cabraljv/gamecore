import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  background-image: url(${require('../../assets/bg_login.png')});
  padding-top: 30px;
  min-height: 80vh;
  a{
    color: #fff;
    text-decoration: none;
  }
  
  div{
    width: 35%;
    background: #333;

    margin: 30px auto;
    border-radius: 10px;
    border: 5px solid #fff;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
    text-align: center;
    margin-top: 0;
    h2{
      font-size: 2.4em;
      color: #fff;
      padding-top: 30px;
      font-family: Economica;
      font-style: italic;
      font-weight: normal;
    }
    form{
      text-align: center;
      margin: 25px;
      margin-top: 10px;
      padding-bottom: 20px;
      
      
    }
    form label{
      color: #fff;
      font-size: 1.1em;
      font-family: Economica;
      display: block;
      margin-top: 10px;
      float: left;
    }
    form input{
      border: 0;
      background: #E4E6E6;
      width: 100%;
      height: 40px;
      border-radius: 7px;
      padding: 0 15px;
    }
    form div#radios{
      display: flex;
      width: 100%;
      margin: auto;
      flex-flow: column;
      border: 0;
      box-shadow: none;

      section{
        
        input{
          width: 20px;
          float: left;
          margin-right: 10px;
        }
        
        
      }
    }
    form a{
      float: right;
      color: #00B3FC;
      display: block;
    }
    form div{
      width: 100%;
      margin: 30px auto;
      border: 0;
      box-shadow: none;
    }
    form button{
      background: #fff;
      border: 0;
      border-radius: 5px;
      padding: 8px 15px;
      cursor: pointer;
      
      p{
        color: #000;
        font-size: 2em;
        font-family: Economica;
        font-weight: 500;
      }
    }
  }
`;
