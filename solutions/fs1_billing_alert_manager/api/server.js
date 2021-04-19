import express from 'express';
import bodyParser from 'body-parser';
import routers from './src/routes/index.js';
import { logger } from './src/logger/logger.js';
import env from './env.js';
import cors from 'cors';
import dbConnection from './src/db/index.js'


/**
 * main function that create server
 */
export const main = () => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
        extended: true
      }));

    server.use(cors({ credentials: false }))
    server.use(routers);
    server.listen(env.PORT, env.HOST, (error) => {
        if(error) {
            logger.log(env.LOG_LEVEL, "Error starting server: " + error)
        } else {
            logger.log(env.LOG_LEVEL, "Server start at port " + env.PORT)
        }
    });
    return server
}
