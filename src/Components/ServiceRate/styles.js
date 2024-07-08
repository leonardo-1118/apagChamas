import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;

  .inner-header {
    height: 65vh;
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .waves {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vh; 
    min-height: 100px;
    max-height: 150px;
  }

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }

  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
  }

  .content {
    background-color: #000;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 100px 100px;
    font-family: 'lato';

    h1 {
        text-align: center;
        font-size: 35px;
        margin-bottom:60px ;
      }

    .left {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      text-align: end;
    }

    h2 {
      margin-bottom: 15px;
      font-weight: 900;
    }

    .right {
      display: flex;
      align-items: center;
    }

    .ico {
      font-size: 100px;
      margin: 0 30px;
    }

    td {
      padding: 20px 0;
    }
  }

  @media(max-width: 900px) {
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .ico {
        font-size: 150px;
      }
    }
  }

  @media(max-width: 780px) {
    .content {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5%;

      td {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 95%;
      }

      h1 {
        font-size: 30px;
        width: 85%;
      }
      
      .ico {
        margin: 0 15px;
      }
    }
  }
`