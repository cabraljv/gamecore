import styled from 'styled-components';

export const Container = styled.div`

  
  header{
    background: #333;
  }
  
  section#recomendados_top{
    display: flex;
    section#recomendados{

      width: 75%;
      h3{
        font-size: 2em;
        font-family: Economica;
        border-bottom: 2px solid #222;
        width: 300px;
        padding-bottom: 10px;
        margin: 20px;
      }
      
    }
    section#top_dev{
      display: flex;
      flex-direction: column;
      margin: 15px;
      margin-left: auto;
      
      h3{
        font-family: Economica;
        font-style: italic;
        margin-right: auto;
        color: #222;
        font-size: 2em;
        padding-right: 60px;
        padding-bottom: 10px;
        border-radius: 2px;
        border-bottom: 3px solid #222;
      }
      div{
        display: flex;
        margin: 10px 0;
        margin-right: auto;
        img{
          height: 60px;
          border-radius: 50px;
        }
        span{
          margin: auto 15px;
          p{
            font-size: 1.3em;
          }
        }
        p{
          color: #222;
          font-family: Lato;
          font-size: 3em;
          margin: auto 0;
        }
      }
    }
  }
  section#my_projects{
    width: 95%;
    h3{
        font-size: 2em;
        font-family: Economica;
        border-bottom: 2px solid #222;
        width: 300px;
        padding-bottom: 10px;
        margin: 20px;
      }
  }
  section#subscribed{
    width: 95%;
    h3{
        font-size: 2em;
        font-family: Economica;
        border-bottom: 2px solid #222;
        width: 300px;
        padding-bottom: 10px;
        margin: 20px;
      }
  }
`;
