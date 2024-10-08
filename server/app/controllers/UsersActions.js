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
    console.info("le token", req.token)
    res.cookie("auth", req.token).json({ message: "connexion réussie",
      id: req.user.id,
      email: req.user.email
     });
   
  } catch (error) {
    next(error);
  }
};
module.exports = { add, login };
