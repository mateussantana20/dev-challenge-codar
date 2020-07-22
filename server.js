const express = require('express');
const nunjucks = require('nunjucks');

const servicos = require('./data');
const depoimentos = require('./depoimentos');

const app = express();

 //Ultilizando arquivos staticos
 app.use(express.static('public'));

 app.set("view engine", "njk");
 nunjucks.configure("views", {
   express: app,
   autoescape: false,
   noCache: true
 })

app.get('/', (req, res) => {
  return res.render("index", {items: servicos, depoimentos: depoimentos})
})

app.listen(5000, () => {
  console.log('Backend started')
})