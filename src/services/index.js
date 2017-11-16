const users = require('./users/users.service.js');
const customers = require('./customers/customers.service.js');
const products = require('./products/products.service.js');
const orders = require('./orders/orders.service.js');
const configurations = require('./configurations/configurations.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(customers);
  app.configure(products);
  app.configure(orders);
  app.configure(configurations);
};
