const aladdin = (req, res) => {
  const { number, magic, distance } = req.body;
  let output = -1;

  if (
    !magic.length ||
    !Array.isArray(magic) ||
    !distance.length ||
    !Array.isArray(distance)
  ) {
    return res.send({ output });
  }

  let startingPoint = [];
  let highestMagic = Math.max(...magic);
  let totalDistance = distance.reduce((acc, curr) => acc + curr);

  if (highestMagic >= totalDistance) {
    startingPoint.push(magic.indexOf(highestMagic));
  }

  let index = 0;
  let remaining = 0;

  while (index < number) {
    if (magic[index] + remaining >= distance[index]) {
      remaining += magic[index] - distance[index];
      startingPoint.push(index);
    } else {
      startingPoint = [];
      remaining = 0;
    }
    index++;
  }
  if (startingPoint.length) {
    output = startingPoint[0];
    return res.status(200).send({ output });
  }
  res.send({ output });
};

module.exports = aladdin;
