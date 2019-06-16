import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: process.env.LOGGER_LEVEL || 'info',
  format: format.json(),
  transports: [
    new transports.Console({
      handleExceptions: true,
      humanReadableUnhandledException: true,
    }),
  ],
  exitOnError: true,
});

export default logger;
