module.exports = function(requiredFields) {
  return function(req, res, next) {
    for (let field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          message: field + " is required"
        });
      }
    }
    next();
  };
};
