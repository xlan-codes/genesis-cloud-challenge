import {config} from 'dotenv';

config();
// global env object that import all env varibles
const env = {
    LOG_LEVEL: process.env.LOG_LEVEL,
    NODE_ENV: process.env.NODE_ENV,
    GC_API: process.env.GC_API,
    GC_SERVICE: process.env.GC_SERVICE,
    GC_API_TOKEN: process.env.GC_API_TOKEN,
    GC_API_VERSION: process.env.GC_API_VERSION,
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    EMAIL_SMTP: process.env.EMAIL_SMTP,
    EMAIL_SMTP_PORT: Number(process.env.EMAIL_SMTP_PORT),
    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    EMAIL_TO: process.env.EMAIL_TO,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_NAME: process.env.EMAIL_NAME,
    EMAIL_SUBJECT: process.env.EMAIL_SUBJECT,
    EMAIL_BODY: process.env.EMAIL_BODY,
    MONGODB_STRING: process.env.MONGODB_STRING,
    INSTANCE_PRICE_PER_HOUR: Number(process.env.INSTANCE_PRICE_PER_HOUR)
}

export default env;
