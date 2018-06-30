module.exports = (hbs) => {
    hbs.registerHelper('to_json', (obj) => {
        return JSON.stringify(obj);
    })
}