const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  /*isCompleted : {
    type: Boolean,
    default: false,

  }*/
});

module.exports = mongoose.model('List', ListSchema);