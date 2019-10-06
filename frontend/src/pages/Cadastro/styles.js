import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  a{
    color: #fff;
  }
  
  div{
    width: 40%;
    background: #fff;
    margin: 40px auto;
    border-radius: 5px;
    text-align: center;
    h2{
      font-size: 1.5em;
      color: #00B3FC;
      padding: 30px;
    }
    form{
      text-align: center;
      margin: 25px;
      margin-top: 10px;
      padding-bottom: 20px;
      
      
    }
    form label{
      color: #00B3FC;
      font-size: 1.1em;
      font-weight: 500;
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
    }
    form button{
      background: #00B3FC;
      border: 0;
      border-radius: 5px;
      padding: 8px 15px;
      cursor: pointer;
      
      p{
        color: #fff;
        font-size: 1.3em;
        font-weight: 500;
      }
    }
  }
`;
