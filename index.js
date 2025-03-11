// @ts-nocheck
// JavaScript sample Proxy with CORS support
// Save this in a file like cors.js and run with:
//    node cors [port]
// It will listen for your requests on the port you pass in command line (or port 8080 by default)
import cors from 'cors-anywhere'; // npm install cors-anywhere
import dotenv from 'dotenv';
dotenv.config();
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8010;
cors.createServer({
    // you can set origin, if needed by exchange
    // setHeaders: { 'origin': 'https://www.bitmex.com' }
}).listen(port);
console.log('Running CORS Anywhere on PORT:' + port);