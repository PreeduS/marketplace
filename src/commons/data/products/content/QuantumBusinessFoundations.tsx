import Typography from 'src/commons/components/Typography';
import BoxLink from 'src/commons/components/BoxLink';
import Pricing from 'src/commons/components/Pricing';

import getMockInstructions from 'src/commons/data/getMockInstructions';

const content = {
  productId: 5,
  tabs: {
    overview: {
      primaryDescription: (
        <>
          <Typography as='h5' marginBottom='1rem'>
            About this course
          </Typography>
          <Typography as='p' marginBottom='2.5rem'>
            Designed by IBM Quantum experts, this course covers the essentials
            of quantum computing and applications for business. Learn about this
            new computing paradigm, how it works, and its potential to address
            incredibly complex business problems. Complete the course to earn
            your IBM Quantum Business Foundations badge.
          </Typography>
        </>
      ),
      asset: null,
      secondaryDescription: (
        <>
          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Privacy statement
          </Typography>

          <Typography as='p' marginBottom='.5rem'>
            NOTICE: IBM leverages the services of Credly, a 3rd party data
            processor authorized by IBM and located in the United States, to
            assist in the administration of the IBM Digital Badge program. In
            order to issue you an IBM Digital Badge, your personal information
            (name, email address, and badge earned) will be shared with Credly.
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
            Prerequisites
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            There are no prerequisites for this course.
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Technical requirements
          </Typography>
          <Typography as='h4' marginBottom='1rem'>
            What web browser should I use?
          </Typography>

          <Typography as='p' marginBottom='.5rem'>
            This learning platform works best with current versions of Google
            Chrome and Firefox. See our{' '}
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
    instructions: getMockInstructions(),

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
