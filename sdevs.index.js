const server_file = require(`${process.cwd()}/src/api-v1/sdevs.server.js`);
const port = 2000;

module.exports = (app) => {
        require(server_file);
          app.start = () => {}
        };