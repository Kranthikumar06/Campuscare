// Sample controller for home page
exports.home = (req, res) => {
  res.render('index', { title: 'Secure My Campus' });
};
