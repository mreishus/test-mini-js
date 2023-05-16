const axios = require('axios');

const urls = [
  'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.css',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js',
  'https://s0.wp.com/wp-content/themes/pub/twentytwentytwo/theme.json',
  'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js',
  'https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.js',
  'https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.js',
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

