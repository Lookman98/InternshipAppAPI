const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({

  name: {
    type: String
  },
  email: {
    type: String
  },
  jobfield: {
    type: String
  },
  status: {
    type: String
  },
  resume: {
    type: String
  }
}, {
  collection: 'students'
})

module.exports = mongoose.model('Student', Student)