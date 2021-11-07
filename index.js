const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.use(express.static('public'));
app.set('view engine','handlebars');
app.engine('handlebars',handlebars({
  'extName':'hbs',
  'layoutsDir':`${__dirname}/views/layouts`
}));

app.get('/', (req, res) => {
  res.sendFile("index.html");
});

app.get('/artiesten',(req,res) =>{
  res.render("artiesten",{layout:'main'});
});

app.listen(3000,'0.0.0.0',()=>{
  console.log("server running now");
});
