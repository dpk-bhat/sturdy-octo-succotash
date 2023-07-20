const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        // connect to the db with connection string
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Connected to DB successfully with ', connect.connection.host, connect.connection.name);
    } catch (error) {
        // if not exit the process
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDb;