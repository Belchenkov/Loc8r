/* GET homepage */
const index = (req, res) => res.render('index', { title: 'MEAN '});

module.exports = {
  index
};
