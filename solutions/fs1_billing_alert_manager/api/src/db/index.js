
import mongoose from 'mongoose';
import env from '../../env.js';
import {logger} from '../logger/logger.js'
;
mongoose.Promise = Promise

const uri = env.MONGODB_STRING;

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: false, useCreateIndex: true })
    .then(() => logger.log(env.LOG_LEVEL ,"Mongodb connection estrablished"))
    .catch(err => logger.log(env.LOG_LEVEL, err))

const dbConnection =  mongoose.connection;
export default dbConnection;