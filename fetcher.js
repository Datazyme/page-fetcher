//takes in arguments 'website' and 'file to copy to' from node and saves the file from the website in specified place 
const request = require('request');
const args = process.argv.slice(2);
const fs = require('fs')
//don't need to conver to string if specifying index of each argument
let url = args[0]
let fileName = args[1];
//requests url for body
request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //writes file to specified directory
  fs.writeFile(fileName, body, err => {
    if (err) {
      console.log(err)
    }
    console.log(`Dowonloaded and saved ${body.length} bytes to ${fileName}`)
  })
});
