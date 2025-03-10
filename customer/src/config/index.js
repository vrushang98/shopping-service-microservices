const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = "./.env." + process.env.NODE_ENV;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}
console.log("process.env.MONGODB_URI:", process.env.MONGODB_URI);
module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};
