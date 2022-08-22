const express = require('express');
const app = express();
const companyRoute = express.Router();
let CompanyModel = require('../model/Company');


companyRoute.route('/GetCompany').get((req, res) => {
  CompanyModel.find((error, job) => {
    if (error) {
      return next(error)
    } else {
      res.json(job)
      console.log('Job retrieved!')
    }
  })
})

companyRoute.route('/GetCompanyJob/:id').get((req, res) => {
  CompanyModel.find({company_id: req.params.id },(error, job) => {
    if (error) {
      return next(error)
    } else {
      res.json(job)
      console.log('Job retrieved!')
    }
  })
})


companyRoute.route('/create-job').post((req, res, next) => {
  CompanyModel.create(req.body, (err, job) => {
    if (err) {
      return next(err)
    } else {
      res.json(job)
      console.log('Job created!',req.body)
    }
  })
});


companyRoute.route('/fetch-job/:id').get((req, res) => {
  CompanyModel.findById(req.params.id, (err, job) => {
    if (err) {
      return next(err)
    } else {
      res.json(job)
      console.log('Job retrieved!')
    }
  })
})


companyRoute.route('/update-job/:id').put((req, res, next) => {
  CompanyModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, job) => {
    if (err) {
      return next(err);
    } else {
      res.json(job)
      console.log('Job updated!')
    }
  })
})

companyRoute.route('/delete-job/:id').delete((req, res, next) => {
  CompanyModel.findByIdAndRemove(req.params.id, (error, job) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: job
      })
      console.log('Job deleted!')
    }
  })
})

module.exports = companyRoute;