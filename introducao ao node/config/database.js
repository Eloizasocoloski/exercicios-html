const { Sequelize } = require('sequelize');

// Configuração do banco de dados
const dbName = 'produtosbd';
const dbUser = 'root';
const dbPassword = 'senai';
const dbHost = 'localhost';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql', // ou 'postgres', 'sqlite', etc.

  // Configurações adicionais (opcional)
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;