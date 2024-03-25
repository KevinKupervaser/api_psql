const app = require("./src/app.js");
const pool = require("./src/pool.js");
require("dotenv").config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const databaseName = process.env.DB_NAME;

pool
  .connect({
    host: "localhost",
    port: 5432,
    database: databaseName,
    user: username,
    password: password,
  })
  .then(() => {
    app().listen(3005, () => {
      console.log("Listening on port 3005");
    });
  })
  .catch((err) => console.log(err));
