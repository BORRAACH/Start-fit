import styled, { createGlobalStyle } from "styled-components";

const GlobalStyleHome = createGlobalStyle`
  
  *{
    box-sizing: border-box;
  }

  .first-container {
    display: flex;
    justify-content: space-around;

    width: 100%;
    
    padding: 2rem 3rem 3rem 3rem;
    gap: 10rem;


    .table-box{
    width: 38.75rem;
    height: 44.5rem;

    border-radius: 10px;

    padding: 49px;

    background-image: linear-gradient(200deg, #fff 9.22%, rgba(255, 255, 255, 0) 90%);
    box-shadow: 0 0 10px 10px #b6b6b637;
  }

  .extended-box{
    width: 33.5rem;
    height: 12.9375rem; 

    border-radius: 0.625rem;
    background: rgba(217, 217, 217, 0.50);
  }

  .small-text {
    color: #000;
    font-family: Ubuntu;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.15625rem;
  }

  .content-2{
      display: flex;
      justify-content: center;
      align-items: center;

      margin-left: -30rem;

      .text-box {
        flex-direction: column;
        gap: 2rem;
      
      .line-text-1{
        color: #000;
        font-family: Ubuntu;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.1875rem;

      .welcome-text {
        font-size: 3.75rem;
        font-weight: 500;
        letter-spacing: 0.1875rem;
      }

      .to-text{
        color: #000;
        text-align: center;
        font-size: 3.125rem;
        font-weight: 400;
        margin-left: 1.1rem;
        letter-spacing: 0.15625rem;
      }
    }

    .line-text-2{
      color: #000;
      font-family: Ubuntu;
      font-size: 4.375rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.21875rem;
      
      display: flex;
      flex-direction: column;
    }

    .line-text-3{
      color: #000;
      font-family: Ubuntu;
      font-size: 1.675rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    }

  }
  }
`;

const RadialGradient = styled.div`
  width: 64rem;
  height: 64rem;
  position: fixed;
  top: 0rem;
  left: 20rem;

  margin-top: -6rem;
  z-index: -10;
  background: radial-gradient(
    46.83% 46.83% at 50% 50%,
    rgba(255, 199, 0, 0.54) 0%,
    rgba(255, 153, 0, 0) 88.54%
  );
`;

export { RadialGradient, GlobalStyleHome };
