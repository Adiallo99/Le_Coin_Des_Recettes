const AbstractRepository = require("./AbstractRepository");

class RecipesRepository extends AbstractRepository{
    constructor(){
        super({table: "recipes"})
    }

    async readAll(){
        const rows = await this.database.query(`SELECT * FROM ${this.table}`);
        return rows[0];
    }

    async readByUser(recipe){
        const rows = await this.database.query(`SELECT * FROM ${this.table} INNER JOINT categories 
        on categories.id = ${this.table}.categories_id WHERE users_id = ?`, 
        [recipe.users_id]);

        return rows[0];
    }

    async create(recipes){
        const [result] = await this.database.query(
            `INSERT INTO ${this.table} (name, preparation_time, ingredients, instruction, users_id, categories_id)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                recipes.name,
                recipes.preparation_time,
                recipes.ingredients,
                recipes.instruction,
                recipes.users_id,
                recipes.categories_id
            ]);
        return result.insertId;
    }
}

module.exports = RecipesRepository;