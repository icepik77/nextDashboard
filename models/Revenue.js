// models/Revenue.js
const { DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('next_course', 'postgres', 'Dark1271', {
  host: 'localhost',
  dialect: 'postgres'
});

const Revenue = sequelize.define('revenue', {
  month: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  revenue: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
 });

module.exports = Revenue;
