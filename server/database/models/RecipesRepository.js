const AbstractRepository = require("./AbstractRepository");

class RecipesRepository extends AbstractRepository {
  constructor() {
    super({ table: "recipes" });
  }

  async readAll(categorie) {
    if (!categorie || categorie === "null") {
      const rows = await this.database.query(
        `SELECT recipes.*, categories.name AS categoriesName FROM ${this.table} INNER JOIN categories 
                on categories.id = ${this.table}.categories_id `
      );

      return rows[0];
    }

    const rows = await this.database.query(
      `SELECT recipes.*, categories.name AS categoriesName FROM ${this.table} INNER JOIN categories 
            on categories.id = ${this.table}.categories_id WHERE categories_id = ?`,
      [categorie]
    );

    return rows[0];
  }

  async readById(recipe) {
    const rows = await this.database.query(
      `SELECT recipes.*, categories.name AS categoriesName FROM ${this.table} INNER JOIN categories 
        on categories.id = ${this.table}.categories_id WHERE ${this.table}.id = ? `,
      [recipe.id]
    );

    return rows[0];
  }

  async readByUser(recipes, categorie) {
    if (!categorie || categorie === "null") {
      const rows = await this.database.query(
        `SELECT recipes.*, categories.name AS categoriesName FROM ${this.table} INNER JOIN categories 
                on categories.id = ${this.table}.categories_id WHERE users_id = ?`,
        [recipes]
      );

      return rows[0];
    }

    const rows = await this.database.query(
      `SELECT recipes.*, categories.name AS categoriesName FROM ${this.table} INNER JOIN categories 
            on categories.id = ${this.table}.categories_id WHERE users_id = ? AND  ${this.table}.categories_id = ?`,
      [recipes, categorie]
    );

    return rows[0];
  }

  async create(recipes, userId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, preparation_time, ingredients, instruction, pictures, users_id, categories_id)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        recipes.name,
        recipes.preparation_time,
        recipes.ingredients,
        recipes.instruction,
        recipes.pictures,
        userId,
        recipes.categories_id,
      ]
    );
    return result.insertId;
  }

  async update(recipes, userId) {
    let query = `UPDATE ${this.table} SET name = ?, preparation_time = ?, ingredients = ?, instruction = ?, categories_id = ? `;
    const params = [
      recipes.name,
      recipes.preparation_time,
      recipes.ingredients,
      recipes.instruction,
      recipes.categories_id,
    ];

    if (recipes.pictures) {
      query += `, pictures = ?`;
      params.push(recipes.pictures);
    }

    query += `WHERE id = ? AND users_id = ?`;
    params.push(recipes.id, userId);

    const [result] = await this.database.query(query, params);

    return result.affectedRows;
  }

  async delete(recipe, userId) {
    const [result] = await this.database.query(
      `DElETE FROM ${this.table} WHERE id = ? AND users_id = ?`,
      [recipe.id, userId]
    );

    return result.affectedRows;
  }
}

module.exports = RecipesRepository;
