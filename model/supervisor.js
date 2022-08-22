const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Supervisor = new Schema({

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
  }
}, {
  collection: 'supervisors'
})

module.exports = mongoose.model('Supervisor', Supervisor)