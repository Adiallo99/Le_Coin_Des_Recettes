const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const users = require("./controllers/UsersActions");
const categories = require("./controllers/CategoriesActions");
const recipes = require("./controllers/RecipesActions");
const auth = require("./services/AuthUsers");

router.get("/categories", categories.browse);
router.get("/recipe", recipes.browse);

router.post("/register", auth.hashPassword, auth.verifEmail, users.add);
router.post("/login", auth.veriPassword, auth.createToken, users.login);
router.post("/recipe", auth.verifToken, recipes.add);

/* ************************************************************************* */

module.exports = router;
