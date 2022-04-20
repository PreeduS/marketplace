import { createGlobalStyle } from 'styled-components'
import { coolGray } from '@carbon/colors';

export default createGlobalStyle`
  body {
    background: ${coolGray[10]};
    
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


`