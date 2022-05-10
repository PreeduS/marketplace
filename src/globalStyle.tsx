import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: white;
  }

  body {
    font-size: 1rem;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  ul, li{
    font-size: 1rem;
  }
  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

`;
