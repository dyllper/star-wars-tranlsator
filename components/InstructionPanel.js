import { motion } from 'framer-motion';

export default function InstructionPanel() {
  return (
    <motion.div
      transition={{ ease: 'easeInOut', duration: 0.75, delay: 0.5 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <section className="container">
        <p>Welcome to a galaxy far, far away!</p>
        <p>
          Here there are all manner of intelligent species, each with their own
          unique languages. In order to facilitate better inter-species
          communication, this application will allow you to translate your
          spoken or written words into the written language of a specified
          species.
        </p>
        <p>To begin, please select a language from the options provided.</p>
        <style jsx>{`
          .container {
            margin: 3rem 0;
            line-height: 1.2;
            background-color: #002839;
            border: 2px solid #00729b;
            border-radius: 20px;
            padding: 2rem;
            color: #05bdff;

            p {
              margin-bottom: 1.8rem;
            }
          }

          @media (min-width: 480px) {
            .container {
              margin: 5rem 0;
            }
          }
        `}</style>
      </section>
    </motion.div>
  );
}
