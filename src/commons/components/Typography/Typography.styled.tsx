import styled from 'styled-components'


export const Wrapper = styled.div<{marginTop?: string, marginBottom?: string}>`
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || 0};
  cursor: ${props => props.onClick !== undefined ? 'pointer': 'auto'}
`