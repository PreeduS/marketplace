
import Typography from 'src/commons/components/Typography'; 
import BoxLink from 'src/commons/components/BoxLink';
import Pricing from 'src/commons/components/Pricing';
import { UnorderedList, ListItem } from 'carbon-components-react';

import getMockInstructions from 'src/commons/data/getMockInstructions';


const content = {
  productId: 7,
  tabs: {
    overview: {
      primaryDescription: (
        <>
          
      
          <Typography as='p' marginBottom='2.5rem'>
          Specifically, if we are given some matrix A, such that Ax = b, where 
b is some known vector, the VQLS algorithm attempts to find x that is proportional to the actual solution. Such an algorithm can be run on near-term devices and recent studies indicate that VQLS has a better 
runtime-scaling (empirically obtained) compared to the classical schemes.


    
          </Typography>
        </>
      ),
      asset: null,
      secondaryDescription: (
        <>
           

          <Typography as='p' marginTop='2.5rem' marginBottom='.5rem'>
          Many proposed quantum algorithms, including HHL, for solving linear systems of equations cannot be implemented in the near term. For near-term quantum 
computers, a hybrid quantum-classical algorithm, VQLS, for solving linear systems was proposed. VQLS is one of the 
popular schemes that demonstrates how variational circuits can be used to solve systems of linear equations.
          </Typography>
    
          <Typography as='p' marginTop='2.5rem' marginBottom='.5rem'>
          Learning objectives
          </Typography>
    



<UnorderedList nested>
            <ListItem>
            VQLS theory
           
            </ListItem>
            <ListItem>
            Hadamard test
           
            </ListItem>
            <ListItem>
         
            Linear Combination of Unitaries (LCU) approach
            </ListItem>
      
          </UnorderedList>





          
        </>
      ),
    },
    docs: {
      description: (
        <>
          <Typography as='p' marginBottom='2.5rem'>
            A collection of product documentation to help get you started.
          </Typography>
          <BoxLink
            label='qiskit.org/documentation'
            url='https://qiskit.org/documentation/'
          />
          <BoxLink label='qiskit.org' url='https://qiskit.org/' />
        </>
      ),
    },
    info: null,
    instructions: getMockInstructions() ,

    pricing: {
      description: (
        <>
          <div style={{ display: 'flex' }}>
            <Pricing type='Free trial' title='Basic Plan' price={null} />
            <Pricing type='Monthly' title='Premium Plan' price='1,200' />
            <Pricing type='Annual' title='Premium Plan' price='11,400' />
          </div>
        </>
      ),
    },
  },
};

export default content;
