const express = require('express');
const app = express();
const jobAppRoute = express.Router();
let jobAppModel = require('../model/jobapplication');


jobAppRoute.route('/GetJobList').get((req, res) => {
  jobAppModel.find((error, jobApp) => {
    if (error) {
      return next(error)
    } else {
      res.json(jobApp)
      console.log('Job Application retrieved!')
    }
  })
})

jobAppRoute.route('/GetJobApplication/:id').get((req, res) => {
  jobAppModel.find({job_id: req.params.id, status: null},(error, jobApp) => {
    if (error) {
      return next(error)
    } else {
      res.json(jobApp)
      console.log('Job Application retrieved!')
    }
  })
})

jobAppRoute.route('/GetStudentApplied/:id').get((req, res) => {
  jobAppModel.find({student_id: req.params.id},(error, jobApp) => {
    if (error) {
      return next(error)
    } else {
      res.json(jobApp)
      console.log('Job Application retrieved!')
    }
  })
})


jobAppRoute.route('/create').post((req, res, next) => {
  jobAppModel.create(req.body, (err, jobApp) => {
    if (err) {
      return next(err)
    } else {
      res.json(jobApp)
      console.log('Job Application created!')
    }
  })
});


jobAppRoute.route('/fetch/:id').get((req, res) => {
  jobAppModel.findById(req.params.id, (err, jobApp) => {
    if (err) {
      return next(err)
    } else {
      res.json(jobApp)
      console.log('Job Application retrieved!')
    }
  })
})


jobAppRoute.route('/update/:id').put((req, res, next) => {
  jobAppModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, jobApp) => {
    if (err) {
      return next(err);
    } else {
      res.json(jobApp)
      console.log('Job Application updated!')
    }
  })
})


jobAppRoute.route('/accept/:id').put((req, res, next) => {
  req.body.status = "Accepted"
  jobAppModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, jobApp) => {
    if (err) {
      return next(err);
    } else {
      res.json(jobApp)
      console.log('Job Application updated!')
    }
  })
})

jobAppRoute.route('/accepted/:id').get((req, res) => {
  jobAppModel.find({job_id: req.params.id, status: "Accepted" },(error, jobApp) => {
    if (error) {
      return next(error)
    } else {
      res.json(jobApp)
      console.log('Job Application retrieved!')
    }
  })
})

jobAppRoute.route('/delete/:id').delete((req, res, next) => {
  jobAppModel.findByIdAndRemove(req.params.id, (error, jobApp) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: jobApp
      })
      console.log('Job Application deleted!')
    }
  })
})

module.exports = jobAppRoute;