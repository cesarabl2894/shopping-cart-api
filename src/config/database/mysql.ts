import { ConnectionOptions, RowDataPacket } from 'mysql2';

class MySQL {
  config: ConnectionOptions;
  mysql: any;
  conn: any;

  constructor(config) {
    this.mysql = require('mysql2/promise');
    this.config = config;
    this.conn = null;
  }

  async createConnection() {
    return await this.mysql.createConnection({
      host: this.config.host,
      user: this.config.user,
      password: this.config.password,
      database: this.config.database,
    });
  }

  async execute(query, options): Promise<RowDataPacket> {
    this.conn = this.conn || (await this.createConnection());
    const [rows] = await this.conn.execute(query, options);

    return rows;
  }

  async close() {
    return this.conn.end();
  }
}

export default MySQL;
