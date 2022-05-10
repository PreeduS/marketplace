import Typography from 'src/commons/components/Typography';

const content = {
  productId: 10,
  tabs: {
    overview: {
      primaryDescription: (
        <>
          <Typography as='h5' marginBottom='1rem'>
            Try Out the Latest Advances in Quantum Computing With Prototypes
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            By Jen Glick, Aggie Branczyk, Bryce Fuller, Iskandar Sitdikov, Caleb
            Johnson, Jim Garrison, and Pedro Rivero
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            Have you ever read a research paper about a new quantum algorithm or
            technique and wished you could use it without having to re-implement
            the whole thing from scratch? You’re not alone. Our goal is to make
            these innovations more accessible than ever before. That’s why,
            today, researchers at IBM Quantum have created <b>prototypes.</b>
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            Launch demos for Entanglement Forging and Quantum Kernel Training
            here without installing any code at all.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            Prototypes is a collaboration between developers and researchers
            that will give users access to prototypes from cutting-edge research
            in areas like quantum simulation and machine learning. These
            software packages are built on top of, and may eventually be
            integrated into the Qiskit SDK. They are a contribution as part of
            the Qiskit community.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            It can take a long time for new quantum computing techniques to make
            their way from original research to usable software. To help you get
            access to these tools faster, we are making them available earlier
            in the development cycle. Each prototype will be accompanied by a
            set of resources and documentation to guide you in applying new
            capabilities to your own research or industry applications. You’ll
            be able to engage with us and other users along the way.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            With today’s launch, we’re debuting not just one but two prototypes
            — one for a technique known as entanglement forging and another for
            quantum kernel training. Below, we’ll introduce you to these
            packages, walk though examples of what usage looks like for each,
            and show you how to begin using these tools in your own work.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            Let’s get started!
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Doubling the Size of Quantum Simulations with Entanglement Forging
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            The Haber-Bosch process is one of the cornerstones of modern
            agriculture — an industrial technique that produces billions of
            dollars of fertilizer each year. This process employs a catalyst to
            convert nitrogen and hydrogen into ammonia, but the practice is
            inefficient and requires extremely high temperatures and pressures,
            making it expensive and dangerous. If we could find a better
            catalyst for the Haber-Bosch process, we could dramatically reduce
            the costs and environmental impacts of global food production.
            However, doing so would require navigating one of the biggest
            challenges in computational chemistry.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            Imagine you’re a chemist. You might know the state of a substance at
            the start of a chemical reaction (the reactant), and you might know
            it at the end of the reaction (the product). However, you often have
            no idea what’s going on during the reaction — how molecules are
            splitting up, how atoms are joining with other atoms, and the
            complicated ways their electrons entangle with one another. With
            quantum computing, we can use tools like the variational quantum
            eigensolver (VQE) algorithm to learn more about the states that
            occur during the reaction. But computing transition states during
            catalysis is challenging, and VQE simulations of real chemical
            systems can quickly stretch the limits of today’s quantum hardware.
            Entanglement forging is a new approach that could make quantum
            chemistry simulations much less computationally intensive.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            When simulating a chemical system using VQE, the number of molecular
            orbitals is very important. Simulating more orbitals means you get
            better accuracy, but it also requires more qubits. In general, to
            simulate N orbitals using VQE, you need 2N qubits. In many cases,
            that’s more qubits (and more gates) than any one quantum system can
            provide. With entanglement forging, however, we can decompose a
            2N-qubit wavefunction into multiple N-qubit states embedded in a
            classical computation using what is known as the Schmidt
            decomposition. This effectively doubles the size of the chemical
            system that we can simulate with a given number of qubits.
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            We designed the Entanglement Forging prototype to let you simulate
            your own systems of interest, even those that wouldn’t be possible
            to simulate using VQE on today’s hardware. Let’s look at a simple
            example of how to use the prototype to find the ground state of the
            H2 molecule using only two qubits, where VQE would require four. We
            start by specifying the molecule and its geometry. We then specify
            the two key elements of the forged-VQE ansatz: the
            Schmidt-decomposed input states and the variational circuit. We then
            execute the algorithm, yielding the following results: (i) the
            optimized coefficients of the Schmidt decomposition, (ii) the
            optimized circuit parameters, and (iii) the minimum energy of the
            molecule.
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            <a
              href='https://gist.github.com/calebj15/d04a67b49366bd9e9d0fd1edc02f04fc#file-entanglement_forging_demo-py'
              target='_blank'
              rel='noreferrer'
            >
              entanglement_forging_demo.py
            </a>
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            <a
              href='https://mybinder.org/v2/gh/qiskit-community/prototype-entanglement-forging/HEAD?labpath=docs%2F1-tutorials%2Ftutorial_2_H2O_molecule_statevector_simulator.ipynb'
              target='_blank'
              rel='noreferrer'
            >
              Launch the Entanglement Forging tutorial on Binder here.
            </a>
          </Typography>

          <Typography as='h5' marginTop='2.5rem' marginBottom='1rem'>
            Training Quantum Kernels for Machine Learning Applications
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            In 1959, computer science pioneer Arthur Samuel applied machine
            learning to the game of checkers. In doing so, he described the
            field of machine learning as “programming computers to learn from
            experience.” Today, we use machine learning for everything from
            detecting fraud to predicting the properties of materials. To learn,
            the computer program attempts to extract useful information about a
            problem that will allow it to make accurate predictions.
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            It’s common to use kernels in machine learning to represent such
            knowledge. We can think of kernels as measuring the similarity
            between pairs of data points through their inner product, where the
            larger the kernel value, the more similar the two points. It turns
            out that many machine learning models care only about this
            similarity instead of the individual data points. What’s more,
            kernel functions let us measure similarity implicitly in a
            higher-dimensional feature space, where the problem may become
            easier to solve. For example, if you’ve ever used a kernel-based
            method like a support vector machine, you know that the kernel plays
            a key role in the model’s performance. In particular, if the
            original data has non-linear structure, a good kernel choice can
            make the data linearly separable in the feature space, leading to
            more accurate predictions.
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            A powerful observation is that quantum computers can replace
            classical feature spaces by encoding data in the quantum state space
            and computing the corresponding quantum kernels. While we know that
            a computational advantage requires these quantum kernels to be hard
            to estimate classically, understanding how to use them for practical
            problems remains an active area of research. Knowledge of a
            problem’s structure appears to be a key factor in the choice of
            circuit family for the quantum kernel. By introducing trainable
            parameters in the circuits, we can explore families of quantum
            kernels in search of those that may capture useful structure about
            our target problem.
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            This exploration of training algorithms for parametrized quantum
            kernels is what the Quantum Kernel Training (QKT) prototype is
            designed to enable. The prototype allows you to experiment with your
            own family of quantum kernels, test out classical optimizers, and
            even define new loss functions for your learning problem. And, along
            with tutorials and documentation, this package provides example
            datasets and quantum feature maps you can get started with right
            away.
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            Let’s look at a simple example of how to use the prototype for a
            binary classification task. We’ll follow a few basic steps. First,
            we define a quantum feature map that encodes our data and defines
            the corresponding quantum kernel. Next, we specify a loss function
            and classical optimizer that we’ll use for the kernel training
            routine. Once we’ve optimized the kernel, we can pass it to a
            machine learning model, such as Qiskit’s QSVC, to predict labels of
            new samples. This process is implemented in the code below.
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            <a
              href='https://gist.github.com/calebj15/17723379c470417e8f99db41f900945d#file-quantum_kernel_training_demo-py'
              target='_blank'
              rel='noreferrer'
            >
              quantum_kernel_training_demo.py
            </a>
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            <a
              href='https://mybinder.org/v2/gh/qiskit-community/prototype-quantum-kernel-training/HEAD?labpath=docs%2Ftutorials%2Fkernel_optimization_using_qkt.ipynb'
              target='_blank'
              rel='noreferrer'
            >
              Launch the Quantum Kernel Training tutorial on Binder here.
            </a>
          </Typography>
        </>
      ),
      asset: null,
      secondaryDescription: null,
    },
    docs: null,
    info: null,
    //instructions: getMockInstructions() ,
    instructions: {
      description: (
        <>
          <Typography as='p' marginBottom='1rem'>
            Ready to try out the prototypes for yourself? You can launch demos
            for{' '}
            <a
              href='https://mybinder.org/v2/gh/qiskit-community/prototype-entanglement-forging/HEAD?labpath=docs%2F1-tutorials%2Ftutorial_2_H2O_molecule_statevector_simulator.ipynb'
              target='_blank'
              rel='noreferrer'
            >
              Entanglement Forging
            </a>{' '}
            and{' '}
            <a
              href='https://mybinder.org/v2/gh/qiskit-community/prototype-quantum-kernel-training/HEAD?labpath=docs%2Ftutorials%2Fkernel_optimization_using_qkt.ipynb'
              target='_blank'
              rel='noreferrer'
            >
              Quantum Kernel Training
            </a>{' '}
            today without installing any code at all.
          </Typography>

          <Typography as='p' marginBottom='1rem'>
            If you are interested in digging into the code that powers our
            prototypes, be sure to check them out on GitHub{' '}
            <a
              href='https://github.com/qiskit-community/prototype-quantum-kernel-training'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>{' '}
            and{' '}
            <a
              href='https://github.com/qiskit-community/prototype-entanglement-forging'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>
            . You can take a tour of the entanglement forging prototype{' '}
            <a
              href='https://www.youtube.com/playlist?list=PLOFEBzvs-VvqpCgxSxhKE4gbJiinURVQX'
              target='_blank'
              rel='noreferrer'
            >
              on YouTube here
            </a>
            , and a tour of the quantum kernel training prototype{' '}
            <a
              href='https://www.youtube.com/playlist?list=PLOFEBzvs-VvqEaBUQ-Doi9XM94N0Oagnq'
              target='_blank'
              rel='noreferrer'
            >
              is available here
            </a>{' '}
            .
          </Typography>
          <Typography as='p' marginBottom='1rem'>
            And remember, we want to hear from you! Please connect with us over
            on GitHub and start a conversation on a discussion board. Feedback
            from users like you will help us improve the prototypes, and may
            even influence decisions about what we develop in the future. So,
            stay tuned as we roll out more prototypes with new techniques you
            can apply to your own research or industry applications.
          </Typography>
        </>
      ),
    },

    pricing: null,
  },
};

export default content;
