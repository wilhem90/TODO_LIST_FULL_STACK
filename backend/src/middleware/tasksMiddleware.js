const validateBody  = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(404).json({message: 'Bad request!'});
  }

  if (body.title === '') {
    return res.status(404).json({message: 'Bad request!'});
  }

  next();
};

module.exports = {
  validateBody,
};