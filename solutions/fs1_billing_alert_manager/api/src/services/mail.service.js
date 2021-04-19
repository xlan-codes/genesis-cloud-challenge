import env from "../../env.js";
import nodemailer from 'nodemailer';
import { logger } from "../logger/logger.js";
const getTransporter = async() => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: env.EMAIL_SMTP,
        port: env.EMAIL_SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: env.EMAIL_USERNAME, 
            pass: env.EMAIL_PASSWORD, 
        },
    });
    return transporter;
}


export const sendMail = async(body = null, subject='', fromEmail='', fromEmailName, toEmail='') => {
    const transporter = await getTransporter();
    await transporter.sendMail({
        from: '"' + fromEmailName + '" <'+ fromEmail +'>',
        to: toEmail,
        subject: subject,
        html: body === null ? env.EMAIL_BODY:body
    }).then((res) => {
        logger.log(env.LOG_LEVEL, "email send")
    }).catch((error) => {
        logger.log(env.LOG_LEVEL, "error: " + error);
    })
}



export const thresholdReached = async(body = null) => {
    await sendMail(body, env.EMAIL_SUBJECT, env.EMAIL_FROM, env.EMAIL_NAME, env.EMAIL_TO);
}

