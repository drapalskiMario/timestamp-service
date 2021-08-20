// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/:date?', (req, res) => {
  let { date } = req.params
  if (!date) {
    let unix = new Date().getTime()
    res.json({ unix, 'date': utc, 'teste': 'teste' })
  }
  const dateParse = Date.parse(date)
  if (dateParse) {
    const validDate = new Date(dateParse)
    res.json({ 'unix': validDate.getTime(), 'utc': validDate.toUTCString() })
  }
  const dateInt = parseInt(date)
  const newDate = new Date(dateInt)
  if (newDate != 'Invalid Date') {
    res.json({ 'unix': newDate.getTime(), 'utc': newDate.toUTCString() })
  } 
  res.json({ 'error': 'Invalid Date'})
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + `http://localhost:${listener.address().port}`)
})
