// models/Customer.js
const { DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('next_course', 'postgres', 'Dark1271', {
  host: 'localhost',
  dialect: 'postgres'
});

const Customer = sequelize.define('customer', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
 });

module.exports = Customer;
