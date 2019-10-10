const validateData = require("../validation/data");

const data = (req, res) => {
  const { data, rules } = req.body;
  const status = validateData(data, rules);

  return res.status(200).json({ status });
};

module.exports = data
