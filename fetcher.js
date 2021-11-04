const request = require('request');
const fs = require('fs')
let url = process.argv.slice(2,3)
let path = process.argv.slice(3,4)

let stringURL = url.toString();
let stringPath = path.toString();

request(stringURL, (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(stringPath, body, err => {
    if (err) {
      console.error(err)
      return
    } 
        const {size} = fs.statSync(stringPath);    
    console.log(`Downloaded and saved ${size} bytes to  ${stringPath}`); //file written successfully
  })
});




