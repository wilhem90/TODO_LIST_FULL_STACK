const getAll = (req, res) => {
  return res.status(200).json({
    message: 'Tudo certo com você'
  });
};

module.exports = {
  getAll
};