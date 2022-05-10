import Typography from 'src/commons/components/Typography';
import BoxLink from 'src/commons/components/BoxLink';

import { UnorderedList, ListItem } from 'carbon-components-react';

const content = {
  productId: 9,
  tabs: {
    overview: {
      primaryDescription: (
        <>
          <Typography as='h5' marginBottom='1rem'>
            About This Project
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            This module allows a user to simulate chemical and physical systems
            using a Variational Quantum Eigensolver (VQE) enhanced by
            Entanglement Forging{' '}
            <a
              href='https://github.com/qiskit-community/prototype-entanglement-forging#references'
              target='_blank'
              rel='noreferrer'
            >
              [1]
            </a>
            . Entanglement Forging doubles the size of the system that can be
            exactly simulated on a fixed set of quantum bits.
          </Typography>

          <Typography as='p' marginBottom='0rem'>
            Before using the module for new work, users should read through the{' '}
            <a
              href='https://github.com/qiskit-community/prototype-entanglement-forging/blob/main/docs/2-reference_guide/reference_guide.md'
              target='_blank'
              rel='noreferrer'
            >
              reference guide
            </a>{' '}
            and the{' '}
            <a
              href='https://github.com/qiskit-community/prototype-entanglement-forging/blob/main/docs/3-explanatory_material/explanatory_material.md'
              target='_blank'
              rel='noreferrer'
            >
              explanatory material
            </a>
            , specifically the{' '}
            <a
              href='https://github.com/qiskit-community/prototype-entanglement-forging/blob/main/docs/3-explanatory_material/explanatory_material.md#%EF%B8%8F-current-limitations'
              target='_blank'
              rel='noreferrer'
            >
              current limitations
            </a>{' '}
            of the module.
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Overview of entanglement forging
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            Entanglement forging was introduced as a way to reduce the number of
            qubits necessary to perform quantum simulation of chemical or
            physical systems. In general, to simulate n orbitals in a chemistry
            problem, one typically needs 2n qubits. Entanglement Forging makes
            it possible to represent expectation values of a 2n-qubit
            wavefunction as sums of multiple expectation values of n-qubit
            states, embedded in a classical computation, thus doubling the size
            of the system that can be exactly simulated with a fixed number of
            qubits. Furthermore, Entanglement Forging permits the circuits
            necessary for the n-qubit simulations to be shallower, relaxing
            requirements on gate error and connectivity, at the cost of
            increased quantum and classical run times.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            Previous techniques for reducing qubit count in quantum simulation
            applications could either reduce qubits slightly at the expense of
            deeper circuits (e.g. 2-qubit reduction, tapering), or yield a 50%
            qubit reduction at the expense of lower accuracy (e.g. restricted
            simulations). Using Entanglement Forging, one can achieve a 50%
            reduction in the number of qubits without compromising accuracy.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            The underlying idea which enables Entanglement Forging is that a
            quantum system on 2n qubits can be partitioned into 2 subsystems,
            and that a Schmidt decomposition of the 2n-qubit wavefunction with
            respect to those subsystems is possible. Because of this
            decomposition, we obtain an accurate classical representation of the
            entanglement between the two subsystems.
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Entanglement Forging Procedure
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            Entanglement Forging leverages near-term, heuristic algorithms, such
            as VQE, to provide an estimate of the 2n-qubit expectation value. It
            does so by assuming a parameterized ansatz for the wavefunction of
            each sub-system. (Note that the parameters of this ansatz describe
            the unitaries U and V in the Schmidt decomposition.) After the
            expectation value M has been decomposed into sub-experiments, the
            procedure is as follows:
          </Typography>
          <Typography as='p' marginBottom='0'>
            1. Execute each sub-experiment on the QPU a number of times
            necessary to obtain sufficient statistics.
          </Typography>
          <Typography as='p' marginBottom='0'>
            2. Combine the expectation values for the sub-experiments with the
            weights wa,b and the Schmidt parameters λn to obtain an estimate for
            M.
          </Typography>
          <Typography as='p' marginBottom='0'>
            3. Send the estimate of M, along with λn and the variational
            parameters {'{θ}'} describing U and V, to a classical optimizer.
          </Typography>
          <Typography as='p' marginBottom='0'>
            4. Use the classical optimizer to further minimize M and provide a
            new set for the variational parameters {'{θ}'} and Schmidt
            coefficients λn.
          </Typography>
          <Typography as='p' marginBottom='0'>
            5. Update the sub-experiments based on the updated {'{θ}'} and λn.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            6. Repeat Steps 1-5 until the estimate for M converges.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            Note that if M is the expectation value of the system's Hamiltonian,
            then it is possible to separate the optimization over the
            variational parameters {'{θ}'} and the Schmidt coefficients λn. In
            particular, the Schmidt coefficients can be optimized after step 2,
            and separately from the variational parameters.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            Further, an easy way to reduce the number of sub-experiments
            necessary is by truncating the Schmidt decomposition of {'|ψ>'} to
            include only some number of the bitstring states {'|bn>'}. However,
            doing so will generally lead to less accuracy in the estimation of
            the expectation value.
          </Typography>
        </>
      ),
      asset: null,
      secondaryDescription: null,
    },
    docs: {
      description: (
        <>
          <Typography as='p' marginBottom='2.5rem'>
            A collection of product documentation to help get you started.
          </Typography>
          <BoxLink
            label='Reference guide'
            url='https://github.com/qiskit-community/prototype-entanglement-forging/blob/main/docs/2-reference_guide/reference_guide.md'
          />
          <BoxLink
            label='Explanatory material'
            url='https://github.com/qiskit-community/prototype-entanglement-forging/blob/main/docs/3-explanatory_material/explanatory_material.md'
          />
        </>
      ),
    },
    info: null,
    instructions: {
      description: (
        <>
          <Typography as='h5' marginBottom='1rem'>
            Installation instructions
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            This prototype depends on the PySCF package, which does not support
            Windows; therefore, Windows users will not be able to install and
            use this software. Advanced Windows users may wish to attempt to
            install PySCF using Ubuntu via the Windows Subsystem for Linux. We
            are exploring the possibility of providing Docker support for this
            prototype so it can be used within Docker Desktop, including on
            Windows.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            Ensure your local environment is compatible with the
            entanglement-forging package:
          </Typography>

          <UnorderedList nested>
            <ListItem>
              Ensure you are on a supported operating system (macOS or Linux)
            </ListItem>
            <ListItem>
              Ensure you are running a supported version of Python
              (py37,py38,py39)
            </ListItem>
            <ListItem>
              (Optional) It can be useful to create a new environment (here
              called my_forging_env) and install Python 3.9 (recommended). There
              are several alternatives for this, using conda within the
              terminal:
            </ListItem>
          </UnorderedList>

          <Typography
            as='p'
            marginLeft='1.5rem'
            marginTop='.5rem'
            marginBottom='0rem'
          >
            conda create -n my_forging_env python=3.9
          </Typography>
          <Typography as='p' marginLeft='1.5rem' marginBottom='0rem'>
            conda activate my_forging_env
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Basic installation
          </Typography>
          <Typography as='p' marginBottom='0rem'>
            1. From the terminal, use pip to install the entanglement-forging
            package:
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            pip install entanglement-forging
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            2. Users may now run the entanglement forging demo notebooks on
            their local machine or use the entanglement-forging package in their
            own software.
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Installation from source
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            0. Make sure you have git and pip (and optionally Miniconda)
            installed.
          </Typography>
          <Typography as='p' marginBottom='0rem'>
            1. From the terminal, clone repository:
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            git clone
            https://github.com/qiskit-community/prototype-entanglement-forging.git
          </Typography>

          <Typography as='p' marginBottom='0rem'>
            Alternatively, instead of cloning the original repository, you may
            choose to clone your personal fork. You can do so by using the
            appropriate URL and adding the original repo to the list of remotes
            (here under the name upstream). This will be requiered for
            contribution unless you are granted write permissions for the
            original repository.
          </Typography>

          <Typography as='p' marginBottom='0rem'>
            git clone {'<YOUR-FORK-URL>'}
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            git remote add upstream
            https://github.com/qiskit-community/prototype-entanglement-forging.git
          </Typography>

          <Typography as='p' marginBottom='0rem'>
            2. Change directory to the freshly cloned forging module:
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            cd prototype-entanglement-forging
          </Typography>
          <Typography as='p' marginBottom='0rem'>
            3. Install the dependencies needed:
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            pip install .
          </Typography>

          <Typography as='p' marginBottom='0rem'>
            4. (Optional) Install the repo in editable mode and with developer
            dependencies for contributing:
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            pip install -e .[dev]
          </Typography>
        </>
      ),
    },

    pricing: null,
  },
};

export default content;
