import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import * as fs from "fs";
import env from '../../env.js';

const defaultLevel = env.LOG_LEVEL;
const logsDir = "logs";

// check if log dir exists and if not exists create it
if (!fs.existsSync(logsDir)) {
	fs.mkdirSync(logsDir);
}

const { combine, timestamp, label, printf} = winston.format;
const createLogger = winston.createLogger;

// logger options
const options = {
	exitOnError: false,
	level: defaultLevel,
	format: combine(
		timestamp({
			format: "DD/MM/YYYY HH:mm:ss",
		}),
		label({ label: "API" }),
		printf(({ level, message, label, timestamp }) => {
			return `${timestamp} ${level} [${label}] ${message}`;
		}),
		winston.format.splat(),
	) ,
	transports: [
		new DailyRotateFile({
			name: "info",
			filename: `${logsDir}/info.log`,
			zippedArchive: true,
			maxSize: "20m",
			maxFiles: "14d",
			showLevel: true,
			level: "info", // info and below to rotate
		}),
		new DailyRotateFile({
			name: "error",
			filename: `${logsDir}/error.log`,
			zippedArchive: true,
			maxSize: "20m",
			maxFiles: "14d",
			showLevel: true,
			level: "error", // error and below to rotate
		}),
		new DailyRotateFile({
			name: "silly",
			filename: `${logsDir}/silly.log`,
			zippedArchive: true,
			maxSize: "20m",
			maxFiles: "1d",
			showLevel: true,
			level: "silly", // error and below to rotate
		}),
	],
};

const logger = createLogger(options);

// check node env and if we are under development prit logs at console and don't create files
if (process.env.NODE_ENV === "develop") {
	logger.add(new winston.transports.Console({
		format: combine(
			timestamp(),
			label({ label: "DEV" }),
			winston.format.colorize({ all: false }),
			printf(({ level, message, label, timestamp }) => {
				return `${timestamp} ${level} [${label}] ${message}`;
			})),
		handleExceptions: true,
	}));
}

export { logger };