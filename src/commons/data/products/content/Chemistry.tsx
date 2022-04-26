
import Typography from 'src/commons/components/Typography';
import { UnorderedList, ListItem } from 'carbon-components-react';
import BoxLink from 'src/commons/components/BoxLink';
import Pricing from 'src/commons/components/Pricing';
const content =  {
  productId: 3,
  tabs: {
    overview: {
      primaryDescription: (
        <>
          <Typography as='h5' marginBottom='1rem'>
            About this course


          </Typography>
          <Typography as='p' marginBottom='2.5rem'>
            Designed for computational scientists, this course explores implementing the Variational Quantum Eigensolver (VQE) in quantum chemistry. Learn about the essential components of VQE, and how to apply the algorithm to calculate the ground state energy of a hydrogen molecule.


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
                 To succeed in this course, you should ideally first complete the Quantum technical foundations course or understand these prerequisites.


              </Typography>

              <UnorderedList nested>
                <ListItem>
                Basic linear algebra: Solve systems of equations with matrices, eigenvalues and eigenvectors, linear transformations, and tensor products.

                </ListItem>
                <ListItem>
                Python: Write and maintain reliable code and familiarity with Numpy or data-science packages.

                </ListItem>
                <ListItem>
                Basic concepts in quantum mechanics: Dirac notation, wavefunction, Hamiltonian, Fock space, Hilbert space, second quantization, symmetry groups, and fermionic operators.


                </ListItem>
              </UnorderedList>

              <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
              Technical requirements


          </Typography>
              <Typography as='h4'   marginBottom='1rem'>
              What web browser should I use?



          </Typography>

                 <Typography as='p' marginBottom='.5rem'>
                 The Open edX platform works best with current versions of Chrome and Firefox. See our <a href = 'https://edx.readthedocs.io/projects/open-edx-learner-guide/en/latest/front_matter/browsers.html' target = '_blank' rel="noreferrer" >list of supported browsers</a> for the most up-to-date information.

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
}



export default content