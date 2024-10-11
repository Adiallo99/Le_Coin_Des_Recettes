const jwt = require("jsonwebtoken");

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
   const user = req.cookies.auth;
    try{
        const decodeToken = await jwt.verify(user, process.env.APP_SECRET);
        const userId = decodeToken.id;
        const recipe = await tables.recipes.readByUser(userId);
        res.json(recipe)
        
    }catch(error){
        next(error);
    }
}

const add = async(req, res, next) => {
    const recipe = req.body;
    try{
        const recipeId = await tables.recipes.create(recipe);
        res.status(201).json({recipeId,  message: "Recette ajouter avec succée!"})

    }catch(error){
        res.send({message: "une erreur est survenue veuillez réessayer!"})
        next(error)
    }

}

const edit = async(req, res, next) => {
    try{
        
        const user = req.cookies.auth;
        const decodeToken = await jwt.verify(user, process.env.APP_SECRET);
        const userId = decodeToken.id; 
        const recipe = {...req.body, id: Number(req.params.id)};
        await tables.recipes.update(recipe, userId);
        res.status(201).json({message: "votre rectte a été modifier avec sucée!"});
    }catch(err){
        res.json({message: "une erreur est survenue veuillez réessayez!"})
        next(err);
    }
}

const RecipesAction = {browse, readByUser, add, edit}

module.exports = RecipesAction;