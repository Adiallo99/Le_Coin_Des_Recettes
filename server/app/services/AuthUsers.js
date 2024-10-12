const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
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

const veriPassword = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await tables.users.readByEmail(email);
    req.user = {
       id : user.id,
       email : user.email,
    }

    if (user) {
      if (await argon2.verify(user.password, password)) {
        next();
      } else {
        res.send("identifiant incorrect");
      }
    } else {
      res.send("erreur d'identifiant ou compte inexistant!");
    }
  } catch (err) {
    res.send("erreur d'identifiant ou compte inexistant!");
    next(err);
  }
  };

  const createToken = async (req, res, next) => {
    try{
      const payload = req.user;
      const token = jwt.sign(payload, process.env.APP_SECRET, {expiresIn: '30d'})
      req.token = token;
      next();

    }catch(err){
      next(err);
    }
  };

const verifToken = async (req, res, next) => {
  try{
    const {auth} = req.cookies;
    const result = await jwt.verify(auth, process.env.APP_SECRET);
    if(result){
      next();
    }
  }catch(err){
    res.send({message: "une connexion est require pour éffectuer cette action!"})
    next(err);
  }
};




module.exports = { hashPassword, verifEmail, veriPassword, createToken, verifToken};
