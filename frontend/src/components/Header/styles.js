import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #575757;
  height: 100px;
  float:top;
  
  box-shadow: 0 10px 8px 1px rgba(0, 0, 0, 0.2);
  header{
  }
  img{
    width: 270px;
    margin-top: 30px;
    margin-left: 4.5%;
    float: left;
  }
  ul{
    margin-top: 35px;
    margin-left: 50px;
    float: left;
    
  }
  ul li{
    float: left;
    margin-left: 15px;
    
  }
  ul li a{
    display: block;
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    font-size: 1.2em;
    padding: 4px;
  }
  ul li a:hover{
    color: #999;
    
  }
  button{
    background: #00B3FC;
    cursor: pointer;
    border-radius: 4px;
    border: 0;
    margin-top: 30px;
    margin-right: 40px;
    box-shadow: 3px 5px 4px 1px rgba(0, 0, 0, 0.2);
    float: right;
    p{
      color: #fff;
      font-weight: 500;
      padding: 10px 30px;
    }
  }
`;

