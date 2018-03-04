const log4js = require('log4js');
log4js.configure({
  appenders: {
    cookie: { type: 'file', filename: 't.log' },
    console: { type: 'console'},
    justerrors: { type: 'logLevelFilter', appender: 'cookie', level: 'warn' }
  },
  categories: {
    default: { appenders: ['justerrors', 'console' ], level: 'info' }
  }
});

const console = log4js.getLogger('local');

logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
