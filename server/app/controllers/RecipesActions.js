const jwt = require("jsonwebtoken");

const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const { categorie } = req.query;
    console.info(req.query)
    const recipe = await tables.recipes.readAll(categorie);
    res.json(recipe);
  } catch (error) {
    next(error);
  }
};

const readById = async (req, res, next) => {
  try {
    const recipe = await tables.recipes.readById(req.params);
    res.json(recipe);
  } catch (error) {
    next(error);
  }
};

const readByUser = async (req, res, next) => {
  const user = req.cookies.auth;
  const { categorie } = req.query;
  try {
    const decodeToken = await jwt.verify(user, process.env.APP_SECRET);
    const userId = decodeToken.id;
    console.info(req.query)
    const recipe = await tables.recipes.readByUser(userId, categorie);

    if (recipe.length > 0) {
      res.json(recipe);
    } else {
      res
        .status(201)
        .json({ recipe, message: "Pas encore de recette créer !" });
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const user = req.cookies.auth;
  const recipe = req.body;
  try {
    console.info("requete", recipe)
    const decodeToken = await jwt.verify(user, process.env.APP_SECRET);
    const userId = decodeToken.id;
    const recipeId = await tables.recipes.create(recipe, userId);
    res.status(201).json({ recipeId, message: "Recette ajouter avec succée!" });
  } catch (error) {
    res.send({ message: "une erreur est survenue veuillez réessayer!" });
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const user = req.cookies.auth;
    const decodeToken = await jwt.verify(user, process.env.APP_SECRET);
    const userId = decodeToken.id;
    const recipe = { ...req.body, id: Number(req.params.id) };
    await tables.recipes.update(recipe, userId);
    res
      .status(201)
      .json({ message: "votre recette a été modifier avec sucée!" });
  } catch (err) {
    res.json({ message: "une erreur est survenue veuillez réessayez!" });
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    console.info("couc")
    const user = req.cookies.auth;
    const decodeToken = await jwt.verify(user, process.env.APP_SECRET);
    const userId = decodeToken.id;
    const recipeId= req.params;
    await tables.recipes.delete(recipeId, userId);
    res.sendStatus(204);
  } catch (err) {
    res
      .status(201)
      .json({ message: "Une erreur est survenue veuillez réessayez !" });
    next(err);
  }
};

const RecipesAction = { browse, readByUser, readById, add, edit, destroy };

module.exports = RecipesAction;
