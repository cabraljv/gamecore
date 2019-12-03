import styled from 'styled-components';

export const Container = styled.div`
  header{
    background: #333;
    width: 100%;
    padding-top: 60px;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  div#bordinha{
    width: 90%;
    height: 1px;
    margin: auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    span{
      width: 45%;
      height: 1px;
      border-bottom: 1px solid #707070;
    }
    p{
      font-family: Economica;
      color: #707070;
      font-size: 1.1em;
      margin-top: -8px;
      

    }
  }
  section#title{
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 90%;
    margin: auto;
    margin-top: 10px;
    p{
      font-family: Economica;
      margin: 40px;
      font-size: 1.5em;
    }
    img{
      border-radius: 10px;
      height: 100%;
      margin: 30px auto;
    }

  }
  section#content{
    margin: auto;
    margin-top: 30px;
    width: 90%;
    text-align: justify;
    
  }
  section#comments{
    margin: auto;
    margin-top: 15px;
    
    width: 90%;
    div#makecomment{
      display: flex;
      width: 100%;
      height: 300px;
      margin-bottom: 20px;
      border: 1px solid #bbb;
      padding: 20px;
      aside{

        width: 10%;
        img{
          height: 70px;
          width: 70px;
          border-radius: 50px;
        }
      }
      div{
        display: flex;
        textarea {
        outline: none;
        padding: 5px;
        resize: none;
        width: 100%;
        font-family: Lato;
        }
        button{
          height: 50px;
          margin: 10px;
          padding: 10px;
          background: #333;
          border: none;
          color: #fff;
          font-family: Economica;
          font-size: 2em;
          cursor: pointer;
          box-shadow: 5px 5px 5px rgba(0,0,0,0.2)
        }
      }
      
    }
    div#comment{
      display: flex;
      width: 100%;
      margin-bottom: 20px;
      border: 1px solid #bbb;
      padding: 20px;
      aside{
        width: 10%;
        img{
        height: 70px;
        width: 70px;
        border-radius: 50px;
      }
      }
      div{
        p{
        padding: 20px;
      }
      
      }
    }
  }
`;
export const CoverImage = styled.div`
  background-image: url(${params => params.img});
  height: 170px;
  width: 70%;
  
  margin: auto;
  display: flex;
  h2{
    color: #fff;
    font-family: Economica;
    font-style: italic;
    font-weight: normal;
    margin: auto 30px;
    font-size: 2.5em;
  }
  
`;
