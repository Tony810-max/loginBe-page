const express = require("express");
const app = express();
const port = 3001;
const route = require("./src/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
//database
const db = require("./src/database/index");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
db.connect();

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
