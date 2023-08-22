const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/student', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch((err) => {
//   console.error('Error connecting to MongoDB:', err);
// });


const connectDB = (DB_URL) => {
  // console.log('connected database...')
  // return mongoose.connect(DB_URL, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })
 return mongoose.connect(DB_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
  
}

module.exports = connectDB;