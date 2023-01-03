import { Sequelize } from "sequelize";

const db = new Sequelize('medicina', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;