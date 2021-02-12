require('dotenv').config();

module.exports = {
    HOST: process.env.MYSQL_HOST,
    DOCKER_HOST: process.env.MYSQL_HOSTNAME,
    PORT: process.env.MYSQL_PORT,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DB: process.env.MYSQL_DATABASE,
    SOCKET: process.env.MYSQL_SOCKET
};
};
