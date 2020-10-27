const express = require('express')
const fetch = require('node-fetch');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  (async () => {
    const response = await fetch('https://s2k7tnzlhrpw.statuspage.io/api/v2/status.json');
    const json = await response.json();
  
    res.send(json);
  })();
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}. If running this app using a docker container, then the app should be available at http://localhost:<host-port>`)
})
