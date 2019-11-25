import styled from 'styled-components';

export const Container = styled.div`
  font-family: Economica;
  
  header{
    background: #333;
    text-align: center;
    h2{
      color: #fff;
      font-weight: normal;
      font-size: 3em;
      padding: 15px;
      
    }
  }
  section{
    div{
      border: 2px dashed rgba(0,0,0,0.4);
      width: 70%;
      text-align: center;
      display: flex;
      justify-content: center;
      margin: auto;
      margin-top: 20px;
      img{
        height: 30px;
        margin: auto 0;
      }
      p{
        font-size: 1.7em;
        color: rgba(0,0,0,0.4);
        padding: 40px 5px;
      }
      :hover{
        background: rgba(0,0,0,0.1)
      }
    }

  }
  div#tracinho{
    height: 2px;
    width: 70%;
    padding-top: 30px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    span{
      border-bottom: 1px solid #707070;
      height: 1px;
      width: 30%;
    }
  }
`;
