const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const categories = await tables.categories.readAll();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
