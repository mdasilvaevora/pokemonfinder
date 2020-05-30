const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const path = require('path');

const app = express();

app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());


// 1) React Routes
app.use(express.static(path.join(__dirname, '../client/build')));

// 2) Routes
app.use(routes);



const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

module.exports = app;