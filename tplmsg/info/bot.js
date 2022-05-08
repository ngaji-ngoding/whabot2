module.exports = function (data) {
  data = data.map((d) => `${d[0]} : ${d[1]}\n`);
  return {
    text: `data bot yang anda minta adalah\n
  ${data}`,
  };
};
