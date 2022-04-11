import { createGlobalStyle } from 'styled-components'
import { coolGray } from '@carbon/colors';

export default createGlobalStyle`
  body {
    background: ${coolGray[10]};
    
  }
`