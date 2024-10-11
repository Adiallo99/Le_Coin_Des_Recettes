const AbstractRepository = require("./AbstractRepository");

class RecipesRepository extends AbstractRepository{
    constructor(){
        super({table: "recipes"})
    }

    async readAll(){
        const rows = await this.database.query(`SELECT * FROM ${this.table}`);
        return rows[0];
    }

    async readByUser(recipes){
        const rows = await this.database.query(`SELECT * FROM ${this.table} INNER JOIN categories 
        on categories.id = ${this.table}.categories_id WHERE users_id = ?`, 
        [recipes]);

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

    async update(recipes, userId){
        const [result] = await this.database.query(
            `UPDATE ${this.table} SET name = ?, preparation_time = ?, ingredients = ?, instruction = ?, categories_id = ? WHERE id = ? AND users_id = ?`, 
            [
                recipes.name,
                recipes.preparation_time,
                recipes.ingredients,
                recipes.instruction,
                recipes.categories_id,
                recipes.id,
                userId
            ]
        );

        return result.affectedRows;

        
    }
}

module.exports = RecipesRepository;