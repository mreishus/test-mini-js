const axios = require('axios');

const urls = [
  'http://127.0.0.1:1234/bootstrap.css',
  'http://127.0.0.1:1234/jquery.js',
  'http://127.0.0.1:1234/modernizr.js',
  'http://127.0.0.1:1234/theme.json',
  'http://127.0.0.1:1234/react.production.min.js',
  'http://127.0.0.1:1234/jquery-1.9.0.js',
];

let index = 0;

setInterval(async () => {
  try {
    const randomQuery = Math.random().toString(36).substring(7);
    const url = `http://127.0.0.1:4747/get?url=${encodeURIComponent(urls[index])}&random=${randomQuery}`;
    console.log(`Sending request to ${url}`);
    const response = await axios.get(url);
    console.log(`Minified file at ${urls[index]}`);
    console.log("");
    index = (index + 1) % urls.length;
  } catch (error) {
    console.error(error);
  }
}, 1000);

