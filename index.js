const express = require('express');
const app = express();
const mongoose = require("mongoose");
const handlebars = require('express-handlebars');
const mongoDB = "mongodb+srv://giovanniH:beheer@cluster0.a6c1e.mongodb.net/local_library";
const port = 3000;
// creating the database connection
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));//db is de database variabele
// public folder
app.use(express.static('public'));
app.set('view engine','handlebars');
app.engine('handlebars',handlebars({
  'extName':'hbs',
  'layoutsDir':`${__dirname}/views/layouts`
}));
// index route
app.get('/', (req, res) => {
  res.sendFile("index.html");
});
// route to artists
app.get('/artiesten',(req,res) =>{
  res.render("artiesten",{layout:'main'});
});
//server listens on port 3000
app.listen(port,'0.0.0.0',()=>{
  console.log("server running now on port "+ port);
});
