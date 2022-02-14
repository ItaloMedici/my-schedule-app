import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    html {
    min-height: 100%;
    background: var(--bg);
    overflow: hidden;

    --horizontalPadding: 224px;

  }

  @media (max-width: 1112px) {
    * {
      --horizontalPadding: 160px;
    }
  }

  @media (max-width: 952px) {
    * {
      --horizontalPadding: 100px;
    }
  }

  @media (max-width: 830px) {
    * {
      --horizontalPadding: 50px;
    }
  }


  @media (max-width: 1080px){
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px){
    html{
      font-size: 87.5%; // 14px 
    }
  }

  button{
    cursor: pointer;  
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: "Roboto", -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black);
  }

  :root {
    --white: #FFF;
    --bg: #F5F5F5;
    --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #494D4B;

    --primary: #DFA290;
    --primary-light: #EDB09F;
  }
`;
