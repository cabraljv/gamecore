import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  header{
    margin-top: 20px;
    display: grid;
    grid-template-columns: 6fr 4fr;
    aside{
      width: 55%;
      margin: auto 0;
      margin-left: auto;
      margin-right: 30px;

      h2{
        
        color: #333333;
        font-weight: normal;
        font-style: italic;
        font-size: 2.3em;
      }
      h3{
        color: #9ABFFF;
        font-weight: normal;
        font-style: italic;
        font-size: 1.5em;
      }
      button{
        background: #333333;
        border: 3px solid #fff;
        border-radius: 10px;
        padding: 10px 40px;
        color: #fff;
        font-family: Economica;
        font-size: 1.3em;
        box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
        margin-top: 30px;
        cursor: pointer;

      }
      button:hover{
        box-shadow: 5px 5px 5px rgba(0,0,0,0.8);
        background: #111;
      }
    }
    img{
      margin: 70px 0;
      height: 400px;
    }
  }
  section#praque{
    background: #333333;
    div{
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      h2{
        color: #fff;
        font-weight: normal;
        font-size: 3em;
        font-family: Economica;
        margin: auto;
      }
      aside{
        display: flex;
        div{
          display: flex;
          flex-direction: column;
          text-align: center;
          margin: 30px;
          img{
            margin-top: auto;
          }
          p{
            color: #fff;
            font-size: 1.2em;
            width: 100%;
            padding: 10px;
            font-family: Economica;
          }
        }
      }
    }
  }
  section#vantagem{
    display: flex;
    justify-content: space-around;
    margin: 20px;
    div{
      background: #B4B4B4;
      height: 330px;
      width: 250px;
      border: 4px solid #303030;
      box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
      border-radius: 15px;
      display: flex;
      align-content: flex-start;
      flex-direction: column;
      text-align: center;
      h4{
        font-size: 1.5em;
      }
      p{
        color: #fff;
      }
      img{
        margin: 10px auto;
        height: 100px;
      }
    }
  }
`;
