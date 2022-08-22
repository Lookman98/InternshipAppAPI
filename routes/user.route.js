const express = require('express');
const app = express();
const userRoute = express.Router();
let UserModel = require('../model/User');

userRoute.route('/').get((req, res) => {
  UserModel.find((error, user) => {
    if (error) {
      return next(error)
    } else {
      res.json(user)
      console.log('Users retrieved!')
    }
  })
})


userRoute.route('/create-user').post((req, res, next) => {
  UserModel.create(req.body, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User created!')
    }
  })
});


userRoute.route('/fetch-user/:id').get((req, res) => {
  UserModel.findById(req.params.id, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User retrieved!')
    }
  })
})


userRoute.route('/update-user/:id').put((req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.json(user)
      console.log('User updated!', user)
    }
  })
})

userRoute.route('/delete-user/:id').delete((req, res, next) => {

  UserModel.findByIdAndDelete(req.params.id, (error, user) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: user
      })
      console.log('User deleted!', user)
    }
  })
})
  
userRoute.route('/login').post((req, res) => {
  UserModel.findOne({email: req.body.email, password: req.body.password}, (err, user) => {
    if (err) {
      return next(err)
    } else {
      
      res.json(user)
      console.log('User retrieved!', req.body.email)
      console.log(user)
    }
  })
})

userRoute.route('/GetStudentSupervisor/:id').get((req, res) => {
  UserModel.find({supervisor_id: req.params.id},(error, user) => {
    if (error) {
      return next(error)
    } else {
      res.json(user)
      console.log('Student retrieved!')
    }
  })
})



module.exports = userRoute;