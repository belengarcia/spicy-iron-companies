const express = require('express');
const router = express.Router();
const companiesController = require("../controllers/companies.controller");

router.get("/", companiesController.list);

module.exports = router;




