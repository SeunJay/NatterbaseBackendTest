const validateInput = require("../validation/input");

const input = (req, res) => {
  const { item } = req.params;
  const { data } = req.body;
  const status = validateInput(data, item);

  return res.status(200).json({ status });
};

module.exports = input;
