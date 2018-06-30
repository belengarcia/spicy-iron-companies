const faker = require('faker');

module.exports = new Array(250).fill(null).map(() => {
    return {
        name: faker.company.companyName(),
        code: faker.company.companySuffix(),
        image: faker.image.cats(),
        money: faker.finance.amount(),
        description: faker.lorem.sentence()
    }
})