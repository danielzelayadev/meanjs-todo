var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  text: { type: String, default: "" },
  done: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', TaskSchema);