import { useState } from 'react';
import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

export default function RecordButton({ setOriginalMessage }) {
  const [isRecording, setIsRecording] = useState(false);
  const [stream, setStream] = useState(null);

  const handleClick = () => {
    if (isRecording) {
      setIsRecording(false);
      if (stream !== null) {
        stream.stop();
        setStream(null);
      }
    } else {
      setIsRecording(true);

      fetch('/api/token')
        .then((response) => response.json())
        .then((data) => {
          let stream = recognizeMicrophone({
            accessToken: data.accessToken,
            objectMode: true,
            extractResults: true,
            format: true,
          });

          stream.on('data', (data) => {
            setOriginalMessage(data.alternatives[0].transcript);
          });

          stream.on('error', (error) => {
            console.error(error);
          });

          setStream(stream);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <button
      className={`record-btn ${isRecording ? 'recording' : ''}`}
      onClick={handleClick}
    >
      {isRecording ? 'Stop Recording' : 'Start Recording'}
      <style jsx>{`
        .record-btn {
          font-size: 2.4rem;
          color: #fff;
          background-color: #a2040b;
          padding: 1rem 1.5rem;
          margin-bottom: 1rem;

          &.recording {
            -moz-box-shadow: inset 0 0 10px #fff;
            -webkit-box-shadow: inset 0 0 10px #fff;
            box-shadow: inset 0 0 10px #fff;
          }
        }
      `}</style>
    </button>
  );
}
