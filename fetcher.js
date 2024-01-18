//implement a node app which:
//Takes two arguments:
//a URL
//a local file path
//It should download the resourcea the URL to the local file path.
//Upon completion it should print out a message similar to:
//Downloaded and saved _____ bytes to ./LOCALFILEPATH

//Async Operations:
//You need to make a http request and wait for response.
//After the http request is complete, you need to take the data received and write it to a file at LOCALFILEPATH

//Already installed NPM Request for this.

//Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions

const request = require('request');
const fs = require('fs');

//run fido! grab it!
const fetch = (url, localFilePath) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
      return;
    }
    //write fido, write!
    fs.writeFile(localFilePath, body, (err) => { //error to keep it async
      if (err) {
        console.log('Write error:', err);
        return;
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
    });
  });
};

let url = 'https://www.arcytekt.com/';
let localFilePath = './page-fetcher';

fetch(url, localFilePath);