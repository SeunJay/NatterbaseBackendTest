const validateData = (data, rules) => {
  const result = {};
  const missingFields = [];
  if (Object.keys(data) === 0) return "Request body is empty";

  rules.forEach(el => {
    if (!data[el]) {
      missingFields.push(el);
    }
  });

  return missingFields.length ? missingFields : "valid";
};

module.exports = validateData;
