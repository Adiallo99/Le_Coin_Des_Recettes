const tables = require("../../database/tables");

const browse = async(req, res, next) => {
    try{
        const recipe = await tables.recipes.readAll();
         res.json(recipe)

    }catch(error){
        next(error);
    }
}

const readByUser = async(req, res, next) => {

    try{
        const recipe = await tables.recipes.readByUser();
         res.json(recipe)

    }catch(error){
        next(error);
    }
}

const add = async(req, res, next) => {
    const recipe = req.body;
    try{
        console.info("les recette", recipe)
        const recipeId = await tables.recipes.create(recipe);
        res.status(201).json({recipeId,  message: "Recette ajouter avec succée!"})

    }catch(error){
        res.send({message: "une erreur est survenue veuillez réessayer!"})
        next(error)
    }

}

const RecipesAction = {browse, readByUser, add}

module.exports = RecipesAction;