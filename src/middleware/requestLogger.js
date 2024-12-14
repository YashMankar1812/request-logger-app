const requestLogger = (level = 'info') => {
    return (req, res, next) => {
      const method = req.method;                 // HTTP method (e.g., POST, GET)
      const url = req.url;                       // Requested URL
      const ip = req.ip;                         // IP address of the client
      const timestamp = new Date().toISOString(); // Timestamp of the request
      const start = Date.now();                  // Track request start time
  
      // Capture the response's status code after the response is sent
      res.on('finish', () => {
        const status = res.statusCode;             // HTTP status code
        const responseTime = Date.now() - start;   // Calculate response time
  
        // Log the request details in the specified format
        const log = {
          method: method,
          URL: url,
          IP : ip,
          timestamp: timestamp,
          status: status,
          responseTime: `${responseTime}ms`,
        };
  
        // Log the information based on the logging level
        if (level === 'info') {
          console.log('[INFO]', JSON.stringify(log));
        } else if (level === 'debug') {
          console.log('[DEBUG]', JSON.stringify(log));
        } else if (level === 'warn') {
          console.warn('[WARN]', JSON.stringify(log));
        } else if (level === 'error') {
          console.error('[ERROR]', JSON.stringify(log));
        } else {
          console.log('[INFO]', JSON.stringify(log));
        }
      });
  
      // Call the next middleware or route handler
      next();
    };
  };
  
  module.exports = { requestLogger };
  