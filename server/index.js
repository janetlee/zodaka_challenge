import {} from 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.static(__dirname + './../client/dist'));

app.get('/items', function (req, res) {
  console.log("GET");
  // items.loadDefaultPage(req.body, function(err, data) {
  //   if(res === undefined) {
  //     res.sendStatus(500);
  //   } else {
  //     console.log('INSIDE GET CALL', data);
  //     if (data) {
  //       res.json(data[data.length-1]);
  //     }
  //   }
  // });
});

app.listen(3000, function() {
  console.log(`listening on port 3000`)
});