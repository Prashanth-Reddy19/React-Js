const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const sequelize = require('./util/database');
const user = require('./models/user');
var cors = require('cors')

const app = express();
app.use(cors());

const userRoutes = require('./routes/user')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use( userRoutes)


sequelize.sync()
.then(result => {
  // console.log(result)
})
  .catch((err) => console.log(err))

  app.listen(3000,()=>{
    console.log('hello server')
  })
  


