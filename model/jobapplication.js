const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let JobApplication = new Schema({
  student_id: {
    type: String
  },
  job_id: {
    type: String
  },
  status: {
    type: String
  }
}, {
  collection: 'JobApplication'
})

JobApplication.index({ job_id: 1, student_id: 1 }, { unique: true })
module.exports = mongoose.model('JobApplication', JobApplication)