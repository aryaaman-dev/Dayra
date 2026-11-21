
const mongoose = require('mongoose');
const Listing = require('../models/listing.js');
const initData = require('./init.js');

require('dotenv').config({
    path: require('path').resolve(__dirname, '../.env')
});

const MONGO_URL = process.env.MONGO_URL;

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log('Data is initialised');
};

async function main() {
    if (!MONGO_URL) {
        throw new Error('MONGO_URL is missing from .env');
    }

    await mongoose.connect(MONGO_URL);
    console.log('MongoDB Connection Active');

    await initDB();

    await mongoose.connection.close();
}

main().catch(async (err) => {
    console.error(err);
    await mongoose.connection.close();
});