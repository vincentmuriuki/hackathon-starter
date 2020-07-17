/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('listing/index', {
    title: 'Home'
  });
};
