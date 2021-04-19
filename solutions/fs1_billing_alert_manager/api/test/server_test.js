import express from 'express';
import bodyParser from 'body-parser';
import routers from '../src/routes/index.js';
import cors from 'cors';
import dbConnection from '../src/db/index.js'


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
    return server
}
export const server = main();
