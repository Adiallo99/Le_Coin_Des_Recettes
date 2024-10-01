const tables = require("../../database/tables");

const add = async (req, res, next) => {
  const user = req.body;
  try {
    const userId = await tables.users.create(user);
    res.status(201).json({ userId, message: "inscription reussie" });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    res.status(200).json({ message: "vous êtes bien connecté" });
  } catch (error) {
    next(error);
  }
};
module.exports = { add, login };
