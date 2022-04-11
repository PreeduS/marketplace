import { Wrapper } from './Asset.styled'
import Typography from 'src/commons/components/Typography';

 
const Asset = () => {
  const link = 'http://forecasting-demo.hs7svmevr5p.us-south.codeengine.appdomain.cloud/'
  return <Wrapper
    //href={link}
    //target='_blank'
    onClick = {()=>window.open(link, '_blank')
  }
  >
    <Typography as = 'h4' style ={{cursor:'pointer'}}>Forecasting Demo </Typography>

  </Wrapper>
  
}

export default Asset;