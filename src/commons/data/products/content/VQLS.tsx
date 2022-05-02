
import Typography from 'src/commons/components/Typography'; 
import BoxLink from 'src/commons/components/BoxLink';
import Pricing from 'src/commons/components/Pricing';
import { UnorderedList, ListItem } from 'carbon-components-react';

import getMockInstructions from 'src/commons/data/getMockInstructions';
import videoImagePath from 'src/commons/data/products/images/video.png';


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

          <Typography as='p' marginTop = '1rem' marginBottom='0'>
          Let's make some assumptions first about the form of 𝐀 and 𝐛. The first assumption is that the matrix 𝐀 is Hermitian, A∈CN×N can always be expressed as linear combination of unitaries. We assume that such a decomposition is presented to us. Also, we assume that the vector 𝐛 and ci are real numbers and each 𝐴𝑖 is an unitary. Later we discuss, how one can achieve such a decomposition. Also, we assume that the vector
b=(b0,b1,b2,⋯,bN−1) can be loaded to a quantum state |b⟩=1∑j=0N−1|bi|2∑i=0N−1bi|i⟩ using a suitable unitary U.
          </Typography>

 
            <img src = {videoImagePath} alt = "" style = {{display: 'block', width: '40rem', height: 'auto', marginTop: '2.5rem', marginBottom: '2rem', cursor: 'pointer'}}></img>
           
        </>
      ),
    },
    info: null,
    //instructions: getMockInstructions() ,
    instructions: {
      description: <>



 

<Typography as = 'p' marginBottom= '0'>
  1. Download the package zip file and extract it into a local directory.

  </Typography>
  
  <Typography as = 'p' marginBottom= '0'>
  2. cd into the root directory where setup.py is located
  </Typography>
  <Typography as = 'p' marginBottom= '0'>
  3. Enter: python setup.py install
  </Typography>

  <Typography as = 'p' marginBottom= '0'>
  4. Execute: python -m pip install --upgrade setuptools
  </Typography>
  <Typography as = 'p' marginBottom= '0'>
  5. Import the library by using import VQLS
  </Typography>



      </>
    } ,

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
