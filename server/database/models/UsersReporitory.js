const AbstractRepository = require("./AbstractRepository");

class UsersRepository extends AbstractRepository {
  constructor() {
    super({ table: "users" });
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM users WHERE email = ?`,
      [email]
    );
    return rows[0];
  }

  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (pseudo, email, password) VALUES (?, ?, ?)`,
      [user.pseudo, user.email, user.hashPassword]
    );
    return result.insertId;
  }
}

module.exports = UsersRepository;
