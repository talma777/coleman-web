const https = require('https');

function fetch(url) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const matches = data.match(/src="\/media\/[^"]+"/g);
      if (matches) {
        console.log("From URL:", url);
        matches.forEach(m => console.log(m));
      }
    });
  });
}

fetch('https://russellbedford.com/about/executive-team/');
fetch('https://russellbedford.com/about/leadership/board/');
fetch('https://russellbedford.com/about/leadership/ceo/');
fetch('https://russellbedford.com/about/leadership/chair/');
