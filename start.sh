#!/bin/bash
cd BACK
echo $(PWD)
echo "Inside 'BACK' directory, checking and doawnloading dependences"
npm install express express-formidable cors mailgun-js
echo "starting the server with npx nodemon"
npx nodemon
