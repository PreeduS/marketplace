import Typography from 'src/commons/components/Typography';
import BoxLink from 'src/commons/components/BoxLink';

const content = {
  productId: 8,
  tabs: {
    overview: {
      primaryDescription: (
        <>
          <Typography as='h5' marginBottom='1rem'>
            About This Project
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            The quantum kernel training (QKT) toolkit is designed to enable
            users to leverage quantum kernels for machine learning tasks; in
            particular, researchers who are interested in investigating quantum
            kernel training algorithms in their own research, as well as
            practitioners looking to explore and apply these algorithms to their
            machine learning applications.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            We've designed this python-based toolkit around new components in
            Qiskit Machine Learning that provide extensible kernel training
            capabilities, documentation to guide users, as well as datasets and
            utilities for exploring and testing concepts.
          </Typography>
          <Typography as='p' marginBottom='0'>
            This project evolved out of research at IBM Quantum on{' '}
            <a
              href='https://arxiv.org/abs/2105.03406'
              target='_blank'
              rel='noreferrer'
            >
              "Covariant Quantum Kernels for Data with Group Structure" [1].
            </a>
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Problem Statement
          </Typography>
          <Typography as='p' marginBottom='0'>
            Given a labeled dataset, optimize a parametrized quantum kernel,
            according to a given loss function, for a machine learning task. For
            example, use quantum kernel alignment (QKA) as a loss function to
            iteratively adapt a quantum kernel to a classification dataset while
            converging to the maximum SVM margin.
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Why Does It Matter?
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            Kernel methods are widespread in machine learning applications. A
            kernel is a similarity measure between data encoded in a
            high-dimensional feature space and can be utilized, for instance, in
            classification tasks with support vector machines. It is known that
            quantum computers can be used to replace classical feature spaces by
            encoding data in a quantum-enhanced feature space. Using an
            algorithm called the quantum kernel estimator (QKE), one can compute
            quantum kernels with data provided classically{' '}
            <a
              href='https://github.com/qiskit-community/prototype-quantum-kernel-training#references'
              target='_blank'
              rel='noreferrer'
            >
              [2]
            </a>
            . A key observation of this work was that a necessary condition for
            a computational advantage requires quantum circuits for the kernel
            that are hard to estimate classically. More recently, researchers
            proved that a quantum kernel can offer superpolynomial speedups over
            any classical learner on a particular learning problem based on the
            hardness of the discrete logarithm problem{' '}
            <a
              href='https://github.com/qiskit-community/prototype-quantum-kernel-training#references'
              target='_blank'
              rel='noreferrer'
            >
              [3]
            </a>
            . Furthermore, this particular kernel is contained in a kernel
            family, called covariant quantum kernels, that can be used for data
            with a group structure{' '}
            <a
              href='https://github.com/qiskit-community/prototype-quantum-kernel-training#references'
              target='_blank'
              rel='noreferrer'
            >
              [1]
            </a>
            . These results indicate that quantum kernels are an increasingly
            promising approach in machine learning problems.
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            However, finding a good quantum kernel for any given dataset can be
            a challenging problem in practice. Sometimes, structure in the data
            can inform this selection, other times a kernel is chosen in an ad
            hoc manner. Quantum Kernel Alignment (QKA) is one approach to
            learning a quantum kernel on a dataset. This technique iteratively
            adapts a parametrized quantum kernel to have high similarity to a
            target kernel informed from the underlying data distribution, while
            converging to the maximum SVM margin{' '}
            <a
              href='https://github.com/qiskit-community/prototype-quantum-kernel-training#references'
              target='_blank'
              rel='noreferrer'
            >
              [1,4-6]
            </a>
            . Such an approach has connections to the performance of the machine
            learning model; that is, QKA finds a quantum kernel, from a family
            of kernels, that yields the smallest upper bound to the
            generalization error. For data with an underlying group structure,
            covariant quantum kernels can be designed to exploit that structure.
            In this case, QKA provides a way to optimize the fiducial state of
            the quantum feature map on such a dataset. This toolkit provides
            examples of datasets with group structure and corresponding
            covariant quantum kernels. More information can be found in the{' '}
            <a
              href='https://github.com/qiskit-community/prototype-quantum-kernel-training/blob/main/docs/background/qkernels_and_data_w_group_structure.ipynb'
              target='_blank'
              rel='noreferrer'
            >
              background material
            </a>
            . and in Ref.{' '}
            <a
              href='https://github.com/qiskit-community/prototype-quantum-kernel-training#references'
              target='_blank'
              rel='noreferrer'
            >
              [1]
            </a>
            .
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
            The QKT Toolkit includes documentation split into:
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <BoxLink
              label='Tutorials: longer examples of end-to-end usage'
              url='https://github.com/qiskit-community/prototype-quantum-kernel-training/tree/main/docs/tutorials'
            />
            <BoxLink
              label='How-to guides: targeted answers to common questions'
              url='https://github.com/qiskit-community/prototype-quantum-kernel-training/tree/main/docs/how_tos'
            />
            <BoxLink
              label='Background material: in-depth information about quantum kernels and algorithms'
              url='https://github.com/qiskit-community/prototype-quantum-kernel-training/tree/main/docs/background'
            />
          </div>
        </>
      ),
    },
    info: null,
    instructions: {
      description: (
        <>
          <Typography as='h5' marginBottom='1rem'>
            Installation
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            To get started running the Quantum Kernel Training (QKT) Toolkit
            demos and tutorials, users should first clone the repository and
            install the required dependencies.
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Clone the Repository
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            Navigate to your workspace and clone the repository using the HTTPS
            address.
          </Typography>
          <Typography as='p' marginBottom='0rem'>
            cd path/to/your/workspace
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            git clone
            https://github.com/qiskit-community/prototype-quantum-kernel-training.git
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            <a
              href='https://docs.github.com/en/authentication/connecting-to-github-with-ssh'
              target='_blank'
              rel='noreferrer'
            >
              This Github tutorial
            </a>{' '}
            provides more information on cloning git repositories using ssh
            keys.
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Create a Fresh Python Development Environment
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            To avoid dependency conflicts, it is recommended to first start a
            new Python development environment. We use{' '}
            <a
              href='https://docs.anaconda.com/anaconda/install/index.html'
              target='_blank'
              rel='noreferrer'
            >
              conda
            </a>{' '}
            in this example:
          </Typography>

          <Typography as='p' marginBottom='0rem'>
            conda create -n qkt-tookit python=3.9
          </Typography>
          <Typography as='p' marginBottom='0rem'>
            conda activate qkt-tookit
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Install Dependencies
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            Once a fresh environment has been created, installing the
            dependencies should be straightforward. Navigate to the top level of
            the repository and:
          </Typography>

          <Typography as='p' marginBottom='0rem'>
            pip install -r requirements.txt
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Test Your Environment
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            To make sure the notebooks will run on your local machine, you may
            test the QKT Toolkit locally. From the top directory:
          </Typography>

          <Typography as='p' marginBottom='0rem'>
            pip install -r requirements-dev.txt
          </Typography>

          <Typography as='p' marginBottom='0rem'>
            make test
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Play Around
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            After the dependencies have installed, users may run the tutorials{' '}
            <a
              href='https://github.com/qiskit-community/prototype-quantum-kernel-training/blob/main/docs/tutorials'
              target='_blank'
              rel='noreferrer'
            >
              tutorials
            </a>{' '}
            and{' '}
            <a
              href='https://github.com/qiskit-community/prototype-quantum-kernel-training/tree/main/docs/how_tos'
              target='_blank'
              rel='noreferrer'
            >
              guides
            </a>{' '}
            on their local machines.
          </Typography>
        </>
      ),
    },

    pricing: null /*{
      description: (
        <>
          <div style={{ display: 'flex' }}>
            <Pricing type='Free trial' title='Basic Plan' price={null} />
            <Pricing type='Monthly' title='Premium Plan' price='1,200' />
            <Pricing type='Annual' title='Premium Plan' price='11,400' />
          </div>
        </>
      ),
    },*/,
  },
};

export default content;
