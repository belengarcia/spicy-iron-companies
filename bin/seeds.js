const mongoose = require('mongoose');
const Company = require(`../models/company.model`)

const companies = require('../data/companies.data');

require('../configs/db.config');

Company.insertMany(companies)
    .then(companies => {
        console.log(`Succes! ${companies.length} were inserted to DB`);
        mongoose.connection.close();
    })
    .catch(error => {
        console.log('Seeding error: ', error);
        mongoose.connection.close();
    });