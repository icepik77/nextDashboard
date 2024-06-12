// import { Sequelize, QueryTypes } from 'sequelize';

// const sequelize = new Sequelize('next_course', 'postgres', 'Dark1271', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

// export default sequelize;

export const AUTH_SECRET="adsasdwqeqzsd2345elsajd132";
const { Pool } = require('pg');

const pool = new Pool({
 host: 'localhost',
 port: 5432,
 user: 'postgres',
 password: 'Dark1271',
 database: 'next_course'
});

export default pool;