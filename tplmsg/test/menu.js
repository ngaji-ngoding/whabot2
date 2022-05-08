module.exports = function (menu) {
  return {
    text: menu.text,
    title: menu.title,
    buttonText: menu.buttonText,
    sections: menu.sections,
  };
};
