const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let User = mongoose.Schema(
  {
    name: { type: String,},
    email: { type: String, },
    password: { type: String, },
    role: { type: String, default: "" },
    jobfield: { type: String, default: "" },
    status: { type: String, default: "active" },
    resume: { type: String, default: "" },
    supervisor_id: { type: String, default: "" },
  },
  {
    collection: "users",
  }
);



module.exports = mongoose.model('User', User)