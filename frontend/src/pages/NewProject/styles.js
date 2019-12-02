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
  section{
    display: grid;
    width: 70%;
    margin: auto;
    grid-template-columns: 7fr 3fr;
  }
  section#right{
    margin: 0;
    display: flex;
    flex-direction: column;
    button{
      margin-bottom: auto;
      margin-left: 20%;
      width: 100%;
      background: #333;
      border: none;
      color: #fff;
      font-family: Economica;
      font-size: 2em;
      cursor: pointer;
      box-shadow: 5px 5px 5px rgba(0,0,0,0.2)
      
    }
  }
  form{
    display: flex;
    flex-direction: column;
    width: 95%;

    margin-top: 30px;
    input{
      height: 35px;
      padding: 5px;
      margin: 10px 0;
    }
    input[title=name]{
      width: 300px;
    }
    textarea {
      outline: none;
      padding: 5px;
      resize: none;
      font-family: Lato;
      margin-bottom: 10px;
    }
    textarea[name="content"] {
      overflow: auto;
    }

    div{
      display: flex;
      justify-content: space-between;
      section{
        display: flex;
        flex-direction: column;
      }
    }
    
  }
  
`;
export const PreviewImage = styled.div`
      border: 2px dashed rgba(0,0,0,0.4);
      width: 70%;
      text-align: center;
      display: flex;
      justify-content: center;
      background-image: url(${params => params.preview});
      background-size: 100%;
      margin: auto;
      cursor: pointer;
      margin-top: 20px;
      img{
        height: 30px;
        margin: auto 0;
      }
      p{
        font-size: 1.7em;
        color: rgba(0,0,0,0.4);
        padding: 80px 5px;
      }
`;
export const PreViewLogo = styled.div`
    margin: auto;
    margin-top: 30px;
    width: 20vw;
    height: 20vw;
    border: 2px dashed rgba(0,0,0,0.4);
    background-image: url(${params => params.preview});
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    p{
      margin: auto;
      text-align: center; 
      font-size: 1.7em;
        color: rgba(0,0,0,0.4);
        padding: 80px 5px;
        cursor: pointer;
    }
`;
