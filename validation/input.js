const validateInput = (data, item)=> {
  const result = {}
  if(Object.keys(data) === 0) return "Request body is empty"

  if(!data[item]) return result.message = "attribute not found";

  delete data[item]

  return result.removed = data
}

module.exports = validateInput