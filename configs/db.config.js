const mongoose = require('mongoose');
const DB_NAME = 'companies';
const DB_URI = `mongodb://localhost/${DB_NAME}`;

mongoose.connect(DB_URI)
    .then(() => {
        console.log(`connected to ${DB_URI}`);
    })
    .catch((error) => {
        console.error(error)
    })

