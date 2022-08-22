const express = require('express');
const app = express();
const studentSupervisorRoute = express.Router();
let StudentSupervisorsModel = require('../model/StudentSupervisor');

studentSupervisorRoute.route('/studentsupervisor').get((req, res) => {
  StudentSupervisorsModel.find((error, StudentSupervisors) => {
    if (error) {
      return next(error)
    } else {
      res.json(StudentSupervisors)
      console.log('StudentSupervisor retrieved!')
    }
  })
})


studentSupervisorRoute.route('/create-StudentSupervisors').post((req, res, next) => {
  StudentSupervisorsModel.create(req.body, (err, StudentSupervisors) => {
    if (err) {
      return next(err)
    } else {
      res.json(StudentSupervisors)
      console.log('StudentSupervisors created!')
    }
  })
});


studentSupervisorRoute.route('/fetch-StudentSupervisors/:id').get((req, res) => {
  StudentSupervisorsModel.findById(req.params.id, (err, StudentSupervisors) => {
    if (err) {
      return next(err)
    } else {
      res.json(StudentSupervisors)
      console.log('StudentSupervisors retrieved!')
    }
  })
})


studentSupervisorRoute.route('/update-StudentSupervisors/:id').put((req, res, next) => {
  StudentSupervisorsModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, StudentSupervisors) => {
    if (err) {
      return next(err);
    } else {
      res.json(StudentSupervisors)
      console.log('StudentSupervisors updated!')
    }
  })
})

studentSupervisorRoute.route('/delete-StudentSupervisors/:id').delete((req, res, next) => {
  StudentSupervisorsModel.findByIdAndRemove(req.body.id, (error, StudentSupervisors) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: StudentSupervisors
      })
      console.log('StudentSupervisors deleted!')
    }
  })
})

// studentSupervisorRoute.post('/login/StudentSupervisors', StudentSupervisorsCtrl.loginStudentSupervisors);


studentSupervisorRoute.route('/login').post((req, res) => {
  StudentSupervisorsModel.findOne({email: req.body.email, password: req.body.password}, (err, StudentSupervisors) => {
    if (err) {
      return next(err)
    } else {
      
      res.json(StudentSupervisors)
      console.log('StudentSupervisors retrieved!')
      console.log(StudentSupervisors)
    }
  })
})


module.exports = studentSupervisorRoute;