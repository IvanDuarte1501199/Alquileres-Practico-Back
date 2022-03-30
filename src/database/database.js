import Sequelize from 'sequelize';
const database = new Sequelize(
  "lab4-final", "postgres", "123456",
  {
    dialect: 'postgres',
    host: 'localhost'
  }
);

export default database;