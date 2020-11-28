export default function InstructionPanel() {
  return (
    <section className="container">
      <p>Welcome to a galaxy far, far away!</p>
      <p>
        Here there are all manner of intelligent species, each with their own
        unique languages. In order to facilitate better inter-species
        communication, this application will allow you to translate your spoken
        or written words into the written language of a specified species.
      </p>
      <p>To begin, please select a language from the options provided.</p>
      <style jsx>{`
        .container {
          margin: 3rem 0;
          line-height: 1.2;
          background-color: #002839; /*rgb(0, 40, 57) */
          border: 2px solid #00729b; /*rgb(0, 114, 155) */
          border-radius: 20px;
          padding: 2rem;
          color: #05bdff; /*rgb(5, 189, 255) */
          /* alt color: #0cabee rgb(12, 171, 238) */
          /* color: #05bdff;
          text-shadow:
                    0.2rem 0.2rem 0.8rem #05bdff,
                    0 0 0.8rem #fff; */

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
  );
}
