const AbstractRepository = require("./AbstractRepository");

class CategoriesRepository extends AbstractRepository {
  constructor() {
    super({ table: "categories" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = CategoriesRepository;
