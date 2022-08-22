const express = require('express');
const app = express();
const studentRoute = express.Router();
let UserModel = require('../model/User');

studentRoute.route('/GetStudents').get((req, res) => {
  UserModel.find({role: "Student"},(error, user) => {
    if (error) {
      return next(error)
    } else {
      res.json(user)
      console.log('Student retrieved!')
    }
  })
})


studentRoute.route('/GetStudentsUnAssign').get((req, res) => {
  UserModel.find({role: "Student", supervisor_id: ""},(error, user) => {
    if (error) {
      return next(error)
    } else {
      res.json(user)
      console.log('GetStudentsUnAssign retrieved!', user)
    }
  })
})


studentRoute.route('/GetStudentsAssigned/:id').get((req, res) => {
  UserModel.find({role: "Student", supervisor_id: req.params.id},(error, user) => {
    console.log("Check pass id", req.params.id);
    if (error) {
      return next(error)
    } else {
      res.json(user)
      console.log('GetStudentsAssigned retrieved!', user)
    }
  })
})


studentRoute.route('/create').post((req, res, next) => {
  UserModel.create(req.body, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User created!')
    }
  })
});


studentRoute.route('/fetch/:id').get((req, res) => {
  UserModel.findById(req.params.id, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User retrieved!')
    }
  })
})


studentRoute.route('/update/:id').put((req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.json(user)
      console.log('User updated!')
    }
  })
})

studentRoute.route('/delete/:id').delete((req, res, next) => {
  UserModel.findByIdAndRemove(req.body.id, (error, user) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: user
      })
      console.log('User deleted!')
    }
  })
})

// studentRoute.post('/login/user', UserCtrl.loginUser);


studentRoute.route('/login').post((req, res) => {
  UserModel.findOne({email: req.body.email, password: req.body.password}, (err, user) => {
    if (err) {
      return next(err)
    } else {
      
      res.json(user)
      console.log('User retrieved!')
      console.log(user)
    }
  })
})


module.exports = studentRoute;