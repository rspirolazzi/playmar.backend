// orders-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const orders = new Schema({
    user: {type: String, required:true},
    customer: {type: String, required:true},
    dueDate: {type: Date,},
    doneDate: {type: Date,},
    numeric: {type: Number,},
    status: {
      type: String,
      enum: ['pending', 'approved', 'denied', 'draft'],
      defaultsTo: 'draft'
    },
    description: {type: String,},
    total: {type: Number},
  }, {
    timestamps: true
  });

  return mongooseClient.model('orders', orders);
};
