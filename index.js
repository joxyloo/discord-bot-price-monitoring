const express = require('express');
const bodyParser = require('body-parser');
const roborabbit = require('./roborabbit');
const discordbot = require('./discordbot');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let oldPrice = 0;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/job-done', (req, res) => {
  const currentPrice = req.body.outputs['your_step_id_save_text'];
  const url = req.body.outputs['your_step_id_go'].location;
  console.log('Job done, current price is ' + currentPrice);
  
  if(!oldPrice) {
    oldPrice = currentPrice;
  }
  if (currentPrice != oldPrice) {
    const msg = `Price has changed from ${oldPrice} to ${currentPrice}. \n ${url}`;
    console.log(msg);
    discordbot.sendMessage(msg);
    oldPrice = currentPrice;
  }
  roborabbit.checkPrice();
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  roborabbit.checkPrice();
});
