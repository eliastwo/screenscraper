const mongoose = require('mongoose');
const dev_db_url = "mongodb://myroot:myroot1@ds163254.mlab.com:63254/screenscraper";
class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        //mongoose.connect(`mongodb://${server}/${database}`)
        mongoose.connect(dev_db_url)
        .then(() => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.error('Database connection error')
        })
    }
}

module.exports = new Database();