export function noCacheMiddleware(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    next();
  }
  
  export default noCacheMiddleware;
  