const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Company = new Schema({

  title: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String, default:"active"
  },
   company_id: {
    type: String
  },
}, {
  collection: 'companies'
})

module.exports = mongoose.model('Company', Company)
;