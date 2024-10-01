const argon2 = require("argon2");
const tables = require("../../database/tables");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  const { password } = req.body;
  try {
    const hash = await argon2.hash(password, hashingOptions);
    delete req.body.password;
    req.body.hashPassword = hash;
    next();
  } catch (err) {
    next(err);
  }
};
const verifEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await tables.users.readByEmail(email);
    if (!user) {
      next();
    } else {
      res.send("compte déjas existant");
    }
  } catch (err) {
    next(err);
  }
};

const verifUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await tables.users.readByEmail(email);
    if (user) {
      if (await argon2.verify(user.password, password)) {
        res.send("connexion réussie");
        next();
      } else {
        res.send("identifiant incorrect");
      }
    } else {
      res.send("erreur identifiant");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { hashPassword, verifEmail, verifUser };
