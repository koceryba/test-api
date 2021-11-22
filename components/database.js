var pgp = require('pg-promise')();

class Postgres {
  cn = {
    host: 'localhost',
    port: 5432,
    database: 'testdatabase',
    user: 'postgres',
    password: '1qaz'
  };
  db = pgp(this.cn);
  
  async init() {
    await this.db.connect()
      .then(function (obj) {
          obj.done();
      })
      .catch(function (error) {
          console.log("ERROR:", error.message);
      });
  }

  get db() {
    return this.db;
  }
}

module.exports = new Postgres();