const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const categories = require("./controllers/CategoriesActions");

router.get("/categories", categories.browse);

/* ************************************************************************* */

module.exports = router;
