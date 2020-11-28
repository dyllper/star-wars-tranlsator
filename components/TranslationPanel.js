import { useState } from 'react';
import RecordButton from '@components//RecordButton';

export default function TranslationPanel({ language }) {
  const [originalMessage, setOriginalMessage] = useState('Enter a message');
  const [translatedMessage, setTranslatedMessage] = useState('');

  const translateMessage = () => {
    fetch(
      `https://api.funtranslations.com/translate/${language}.json?text=${originalMessage}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.contents) {
          setTranslatedMessage(data.contents.translated);
        } else {
          setTranslatedMessage(data.error.message);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="container">
      <div className="instruction-panel">
        To begin translating to {language}, just click the button below.
        Alternatively, you may opt to manually type out your message. When you
        are finished generating your message, just hit translate to begin
        communicating with species across the galaxy!
      </div>
      <div className="btn-container">
        <RecordButton setOriginalMessage={setOriginalMessage} />
        <button className="translate-btn" onClick={translateMessage}>
          Translate
        </button>
      </div>
      <div className="message-container">
        <div className="text-area-container">
          <label htmlFor="original-message">Original Message:</label>
          <textarea
            id="original-message"
            value={originalMessage}
            onChange={(e) => setOriginalMessage(e.target.value)}
            placeholder="Enter your message..."
          ></textarea>
        </div>
        <div className="text-area-container">
          <label htmlFor="translated-message">Translated Message:</label>
          <textarea
            id="translated-message"
            value={translatedMessage}
          ></textarea>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5rem;

          .instruction-panel {
            margin-bottom: 3rem;
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

          .btn-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-bottom: 1rem;

            .translate-btn {
              font-size: 1.5rem;
              color: #fff;
              background-color: #0078a0;
              padding: 1rem 1.5rem;
              margin-bottom: 1rem;
            }
          }

          .message-container {
            width: 100%;
            display: flex;
            flex-direction: column;

            .text-area-container {
              height: 25rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              label {
                color: #fefe00;
                background-color: #000;
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
              }

              textarea {
                width: 100%;
                height: 100%;
                font-size: 1.6rem;
                background-color: rgba(0, 40, 57, 0.7);
                border: 1px solid #05bdff;
                color: #fff;
                margin-bottom: 1.5rem;
              }
            }
          }
        }

        @media (min-width: 375px) {
          .container {
            .btn-container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              column-gap: 1rem;

              .translate-btn {
                font-size: 1.8rem;
              }
            }
          }
        }

        @media (min-width: 480px) {
          .container {
            .instruction-panel {
              margin-bottom: 5rem;
            }

            .btn-container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              column-gap: 2rem;

              .translate-btn {
                font-size: 2.4rem;
              }
            }

            .message-container {
              flex-direction: row;
              justify-content: space-between;
              align-items: center;

              .text-area-container {
                height: 40rem;
                width: 40%;

                label {
                  font-size: 1.6rem;
                }

                textarea {
                  font-size: 1.8rem;
                }
              }
            }
          }
        }
      `}</style>
    </section>
  );
}
