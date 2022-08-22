const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Logbook = new Schema({

  name: {
    type: String
  },
  student_id: {
    type: String
  }
}, {
  collection: 'logbooks'
})

module.exports = mongoose.model('Logbook', Logbook)