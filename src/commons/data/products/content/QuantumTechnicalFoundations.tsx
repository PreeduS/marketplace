
import Typography from 'src/commons/components/Typography'; 
import BoxLink from 'src/commons/components/BoxLink';
import Pricing from 'src/commons/components/Pricing';
import { UnorderedList, ListItem } from 'carbon-components-react';

import getMockInstructions from 'src/commons/data/getMockInstructions';


const content = {
  productId: 6,
  tabs: {
    overview: {
      primaryDescription: (
        <>
          <Typography as='h5' marginBottom='1rem'>
            About this course
          </Typography>
          <Typography as='p' marginBottom='.5rem'>
          This course is right for you if you have a strong STEM background, for example a data scientist, computational scientist, or industry specialist.


    
          </Typography>
          <Typography as='p' marginBottom='2.5rem'>
          Guided by IBM Quantum computing experts, you will learn the fundamentals of quantum computing. This foundation gives you the necessary skills, terminology, and concepts required for success in the more advanced courses.



    
          </Typography>
        </>
      ),
      asset: null,
      secondaryDescription: (
        <>
           

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
          Prerequisites
          </Typography>
          <Typography as='p' marginBottom='.5rem'>
          To succeed in this course, you should understand these prerequisites. We provide opportunities to increase your knowledge about topics before each module.

 

</Typography>
<UnorderedList nested>
            <ListItem>
         
            Basic linear algebra: Solve systems of equations with matrices, eigenvalues and eigenvectors, and linear transformations. We will cover tensor products.

            </ListItem>
            <ListItem>
            Trigonometry and complex numbers: Understand the unit circle and how to translate complex numbers to polar coordinates to calculate phases.

            </ListItem>
            <ListItem>
            Python: Write and maintain reliable code and familiarity with Numpy or data-science packages.

            </ListItem>
            <ListItem>
            Statistics and probability: Comprehend probability and other stochastic notions.

            </ListItem>
            <ListItem>
            Complexity theory and the limitations of classical computers: Understand scaling laws and categorizing problems such as P versus NP problems.

            </ListItem>
          </UnorderedList>





          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Technical requirements
          </Typography>
          <Typography as='h4' marginBottom='1rem'>
            What web browser should I use?
          </Typography>

          <Typography as='p' marginBottom='.5rem'>
          This learning platform works best with current versions of Google Chrome and Firefox. See our{' '}
            <a
              href='https://edx.readthedocs.io/projects/open-edx-building-and-running-a-course/en/open-release-juniper.master/front_matter/browsers.html?%20support'
              target='_blank'
              rel='noreferrer'
            >
              list of supported browsers
            </a>{' '}
            for the most up-to-date information.
          </Typography>
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
