import MySQL from '@server/config/database/mysql';

class Database {
  getDBConfiguration() {
    const dbConfig = {
      host: process.env.DB_HOSTNAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    };
    return dbConfig;
  }

  execute(query, options): Promise<any> {
    const config = this.getDBConfiguration();
    const adapter = new MySQL(config);
    return new Promise((resolve, reject) => {
      adapter
        .execute(query, options)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
}

export default Database;
