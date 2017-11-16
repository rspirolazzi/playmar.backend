// products-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const products = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    description: {type: String,},
    price: {type: Number, defaultsTo: 0},
    //category: {model: 'productCategory',//required: true},
    enabled: {type: Boolean, defaultsTo: true}
  }, {
    timestamps: true
  });

  return mongooseClient.model('products', products);
};
