import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import InstructionPanel from '@components/InstructionPanel';
import LanguageMenu from '@components/LanguageMenu';
import TranslationPanel from '@components/TranslationPanel';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <div className="container">
      <Head>
        <title>Star Wars Translator</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
          integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
          crossOrigin="anonymous"
        />
      </Head>

      <motion.header
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="header">
          <h1>Star Wars</h1>
          <h2>Translator</h2>
        </div>
      </motion.header>

      <main>
        <InstructionPanel />
        <LanguageMenu setSelectedLanguage={setSelectedLanguage} />
        {selectedLanguage && <TranslationPanel language={selectedLanguage} />}
      </main>
      <style jsx>{`
        .container {
          width: 80%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 1rem;
          color: #fefe00;

          h1 {
            font-size: 4rem;
          }

          h2 {
            font-size: 2rem;
          }
        }

        @media (min-width: 620px) {
          .header {
            h1 {
              font-size: 8rem;
            }

            h2 {
              font-size: 3rem;
            }
          }
        }
      `}</style>
    </div>
  );
}
