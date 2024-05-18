const notFound = (req, res, next) => {
  res.status(404).send("Request not found!");
};

module.exports = notFound;
