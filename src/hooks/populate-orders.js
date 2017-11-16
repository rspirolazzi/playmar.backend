// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function populateOrders (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    /*return new Promise((resolve, reject)=>{
      const User = require('../models/users.model')
      User.findOne({_id:hook.result.user})
    })*/
    return Promise.resolve(hook);
  };
};
