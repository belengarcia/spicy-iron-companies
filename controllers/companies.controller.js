const createError = require('http-errors');
const mongoose = require('mongoose');
const Company = require('../models/company.model');

module.exports.list = (req,res,next) => {
   Company.find() //¿? por qué el modelo
        .then( companies => {
            console.log(companies)
            res.render('companies/index', {companies})
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports.get = (req,res,next) => {
    Company.findById(req.params.id)
        .then(company => {
            console.log(company)
            res.render('companies/details', {company})
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports.create = (req,res,next) => {
    res.render('companies/create', {
        company: new Company()
    });
}

module.exports.doCreate = (req,res,next) => {
    const company = new Company(req.body);
    company.save()
        .then(()=>{
            console.info(`Company created: ${req.body}`);
            res.redirect('/companies');
        })
        .catch(error => {
            res.render('companies/create', {
                company: company,
                error: error.errors
            });
        });
}