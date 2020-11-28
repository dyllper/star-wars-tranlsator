# Star Wars Translator

Welcome to a galaxy far, far away! Or, well, maybe not so far after all because it's right here on your computer!

This application was built using [Next JS](https://nextjs.org). It makes use of the [IBM Watson Speech to Text](https://github.com/watson-developer-cloud/speech-javascript-sdk) API as well as the [FunTranslation Star Wars API](https://api.funtranslations.com/) in order to allow a user to either speak or type a message and have it translated into one of 6 Star Wars languages!

If you would like to run this code locally, you will need to set up your own [IBM Cloud account](https://cloud.ibm.com/login) and create a Watson Speech to Text Service to obtain an IAM API key. Then all you need to do is create a .env.local file in the root directory of the project with an entry for SPEECH_TO_TEXT_IAM_APIKEY and SPEECH_TO_TEXT_URL. 
