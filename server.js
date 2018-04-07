const express = require('express')
const app = express()
const path = require('path');
const axios = require('axios');

app.use('/', express.static(path.join(__dirname, './client/public')))

app.get('/blockchainz', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-11-01&end=2017-11-21')
    .then(results => {
      let output = {
        labels: [],
        datasets: [{
            label: 'BLOCKCHAINZ',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
      }
      let obj = results.data.bpi;
      output.labels = Object.keys(obj).sort((a, b) => new Date(a) - new Date(b));
      output.datasets[0].data = output.labels.map(label => obj[label]);
      res.send(output);
    });
})

app.listen(3000, () => console.log('Server running and listening on port 3000!'))



  // data: {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //   datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)'
  //       ],
  //       borderColor: [
  //           'rgba(255,99,132,1)'
  //       ],
  //       borderWidth: 1
  //   }]
  // }
