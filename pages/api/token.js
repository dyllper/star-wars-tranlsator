import { IamTokenManager } from 'ibm-watson/auth';

export default (req, res) => {
  const sttAuthenticator = new IamTokenManager({
    apikey: process.env.SPEECH_TO_TEXT_IAM_APIKEY,
  });

  sttAuthenticator
    .requestToken()
    .then(({ result }) => {
      res.status(200).json({
        accessToken: result.access_token,
        url: process.env.SPEECH_TO_TEXT_URL,
      });
    })
    .catch((error) => res.status(500).json({ error: error }));
};
