const https = require('https');
const fs = require('fs');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({url, data}));
    }).on('error', reject);
  });
}

async function run() {
  const urls = [
    'https://russellbedford.com/about/executive-team/',
    'https://russellbedford.com/about/leadership/board/',
  ];
  const allMatches = [];
  for (const url of urls) {
    const {data} = await fetch(url);
    const matches = data.match(/src="(\/media\/[^"]+)"/g);
    if(matches) {
      allMatches.push(`From ${url}:`);
      allMatches.push(...matches);
    }
  }
  fs.writeFileSync('imgs.txt', allMatches.join('\n'));
  console.log("Done. Wrote to imgs.txt");
}

run();
