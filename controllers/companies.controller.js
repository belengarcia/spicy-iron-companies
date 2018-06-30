const createError = require('http-errors');
const mongoose = require('mongoose');
const Company = require('../models/company.model');

module.exports.list = (req,res,next) => {
   Company.find() //¿? por qué el modelo
    .then( companies => {
        console.log(companies)
        res.render('companies/index', {companies})
    })
    .catch()
    
}