const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSupervisor = new Schema({
  student_id: {
    type: String
  },
  supervisor_id: {
    type: String
  }
}, {
  collection: 'studentsupervisors'
})

module.exports = mongoose.model('StudentSupervisor', Supervisor)