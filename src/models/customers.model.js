// customers-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const customers = new Schema({
    code: {type: String, required: true},
    name: {type: String,},
    lastName: {type: String,},
    phone: {type: String,},
    mobile: {type: String,},
    email: {type: String,},
    dni: {type: String,},
    cuit: {type: String,},
    //iva: {model: 'customerTax',},
    description: {type: String,},
    buyDate: {type: Date,},
    dueWarranty: {type: Date,},
    enabled: {type: Boolean, defaultsTo: true}
  }, {
    timestamps: true
  });

  return mongooseClient.model('customers', customers);
};
