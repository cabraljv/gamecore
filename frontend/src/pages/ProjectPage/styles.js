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
      width: 90%;
      margin: 30px auto;
    }

  }
  section#content{
    margin: auto;
    margin-top: 30px;
    width: 90%;
    text-align: justify;
    
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
