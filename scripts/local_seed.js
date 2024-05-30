const { Sequelize } = require('sequelize');

const {
    invoices,
    customers,
    revenue,
    users,
} = require('../app/lib/placeholder-data.js');

const sequelize = new Sequelize('next_course', 'postgres', 'Dark1271', {
  host: 'localhost',
  dialect: 'postgres'
});

const bcrypt = require('bcrypt');

const User = require('../models/User');
const Invoice = require('../models/Invoice');
const Customer = require('../models/Customer');
const Revenue = require('../models/Revenue');
const { serialize } = require('v8');

async function seedUsers() {
    try {
      const hashedUsers = await Promise.all(users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return {
          ...user,
          password: hashedPassword
        };
      }));
  
      const insertedUsers = await User.bulkCreate(hashedUsers, {
        ignoreDuplicates: true // Игнорируем дубликаты при конфликте
      });
  
      console.log(`Seeded ${insertedUsers.length} users`);
  
      return insertedUsers;
    } catch (error) {
      console.error('Error seeding users:', error);
      throw error;
    }
}

async function seedInvoices() {
    try {
      const insertedInvoices = await Promise.all(invoices.map(async (invoice) => {
        try {
          const createdInvoice = await Invoice.create(invoice, {
            ignoreDuplicates: true // Игнорируем дубликаты при конфликте
          });
          return createdInvoice;
        } catch (error) {
          console.error('Error creating invoice:', error);
          throw error;
        }
      }));
  
      console.log(`Seeded ${insertedInvoices.length} invoices`);
  
      return insertedInvoices;
    } catch (error) {
      console.error('Error seeding invoices:', error);
      throw error;
    }
}

async function seedCustomers() {
    try {
      const insertedCustomers = await Promise.all(customers.map(async (customer) => {
        try {
          const createdCustomer = await Customer.create(customer, {
            ignoreDuplicates: true // Игнорируем дубликаты при конфликте
          });
          return createdCustomer;
        } catch (error) {
          console.error('Error creating customer:', error);
          throw error;
        }
      }));
  
      console.log(`Seeded ${insertedCustomers.length} customers`);
  
      return insertedCustomers;
    } catch (error) {
      console.error('Error seeding customers:', error);
      throw error;
    }
}

async function seedRevenue() {
    try {
      const insertedRevenue = await Promise.all(revenue.map(async (rev) => {
        try {
          const createdRevenue = await Revenue.create(rev, {
            ignoreDuplicates: true // Игнорируем дубликаты при конфликте
          });
          return createdRevenue;
        } catch (error) {
          console.error('Error creating revenue:', error);
          throw error;
        }
      }));
  
      console.log(`Seeded ${insertedRevenue.length} revenue`);
  
      return insertedRevenue;
    } catch (error) {
      console.error('Error seeding revenue:', error);
      throw error;
    }
}

// Основная функция для запуска всех операций
async function main() {
    try {
      // Заполнение данных
      // await seedUsers();
      // await seedCustomers();
      //await seedInvoices();
      await seedRevenue();
  
      console.log('All seeding operations completed successfully.');
    } catch (error) {
      console.error('An error occurred during seeding:', error);
    } finally {
      // Закрытие соединения с базой данных
      await sequelize.close();
    }
}
  
// Вызов основной функции
main();

module.exports = {sequelize};
