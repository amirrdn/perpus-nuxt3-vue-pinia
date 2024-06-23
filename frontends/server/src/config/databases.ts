import { join } from 'path';
import { DataSource, createConnections } from 'typeorm';

import 'dotenv/config';
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}
const databses = new DataSource({
    type: 'postgres',
    host: config.host || 'localhost',
    port: 5432,
    username: config.user || 'root',
    password: config.password || '',
    database: config.database || '',
    logging: true,
    entities: [join(__dirname, '../entity/*{.ts,.js}')],
    synchronize: false,
    dropSchema: false,
    migrationsRun: false,
    subscribers: ["src/subscriber/**/*.ts"],
  });
databses.initialize()
.then(() => {
    console.log(`Data Source has been initialized`);
})
.catch((err) => {
    console.error(`Data Source initialization error`, err);
});
export default databses;