module.exports = function (nama, email) {
  let i = 0;
  let text = nama
    .map((n) => "nama : " + n + "\nemail : " + email[i++] + "\n")
    .toString()
    .replace(",", "\n");
  return {
    text,
  };
};
