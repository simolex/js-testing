const mapArrayToString = (array) => {
  return array.filter((item) => Number.isInteger(item)).map(String);
};
module.exports = mapArrayToString;
