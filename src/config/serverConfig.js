const dotenv = require('dotenv')
dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    url : process.env.url
}