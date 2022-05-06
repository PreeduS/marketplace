
// PrototypeEntanglementForging.tsx

import Typography from 'src/commons/components/Typography';
import BoxLink from 'src/commons/components/BoxLink';
import Pricing from 'src/commons/components/Pricing';

import getMockInstructions from 'src/commons/data/getMockInstructions';

 // https://github.com/qiskit-community/prototype-entanglement-forging

const content = {
  productId: null,
  tabs: {
    overview: {
      primaryDescription: (
        <>
          <Typography as='h5' marginBottom='1rem'>
            T
          </Typography>
          <Typography as='p' marginBottom='2.5rem'>
           D
          </Typography>
        </>
      ),
      asset: null,
      secondaryDescription: (
        <>
          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
          T
          </Typography>

          <Typography as='p' marginBottom='.5rem'>
       D
          </Typography>

          <Typography as='p' marginBottom='.5rem'>
            You will receive an email notification from Credly with instructions
            for claiming the badge. Your personal information is used to issue
            your badge and for program reporting and operational purposes. It
            will be handled in a manner consistent with IBM privacy practices.
            The IBM Privacy Statement can be viewed here:{' '}
            <a
              href='https://www.ibm.com/privacy'
              target='_blank'
              rel='noreferrer'
            >
              Read IBM's full privacy statement.
            </a>
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            T
          </Typography>
          <Typography as='p' marginBottom='.5rem'>
           D
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
    instructions: getMockInstructions(),

    pricing: null/*{
      description: (
        <>
          <div style={{ display: 'flex' }}>
            <Pricing type='Free trial' title='Basic Plan' price={null} />
            <Pricing type='Monthly' title='Premium Plan' price='1,200' />
            <Pricing type='Annual' title='Premium Plan' price='11,400' />
          </div>
        </>
      ),
    },*/
  },
};

export default content;
