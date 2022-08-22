const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const database = require('./db/database');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const companyRoute = require('./routes/company.route')
const studentRoute = require('./routes/student.route')
const studentSupervisorRoute = require('./routes/student.route')
const userRoute = require('./routes/user.route')
const jobAppRoute = require('./routes/jobapplication.route')

// MongoDB connection 
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database connected ')
},
  error => {
    console.log('Database not connected : ' + error)
  }
)


const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors());


app.use('/api', userRoute)
app.use('/api/student', studentRoute)
app.use('/api/company', companyRoute)
app.use('/api/studentsupervisor', studentSupervisorRoute)
app.use('/api/jobApp', jobAppRoute)



app.post('src/assets', upload.single('photo'), (req, res) => {

  
  console.log(req.file.filename);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('PORT connected: ' + port)
})

app.use(function (error, res,) {
  console.error(error.message);
  if (!error.statusCode) error.statusCode = 500;
  res.status(error.statusCode).send(error.message);
});