const express = require('express');
const app = express();
const port = process.env.PORT || 3000 
const path = require("path");
const hbs = require('hbs');


const staticPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templete/views');
const partialsPath = path.join(__dirname, '../templete/partials');

console.log(partialsPath);


app.set('view engine', 'hbs');

app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);
app.set('views', viewsPath);

app.get('/', (req, res)=>{
    res.render('index.hbs');
});

app.get('/', (req,res)=>{
    res.send('hellow word from express');
});


app.listen(port, () =>{
    console.log(`server listening on ${port}` );
})