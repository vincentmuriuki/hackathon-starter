/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('rental/home', {
    title: 'Home'
  });
};

// exports.brake = (req, res) => {
//   res.render('rental/layout', {
//     title: 'Home'
//   });
// };