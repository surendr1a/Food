const mongoose = require('mongoose');
const mongooseurl = 'your database url';

const mongodb = async () => {
    try {
        await mongoose.connect(mongooseurl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        // Fetch data after connection
        const fetchedDataCollection = mongoose.connection.db.collection('fooddata');
        const foodfetchedData = await fetchedDataCollection.find({}).toArray();

        const foodCategoryCollection = mongoose.connection.db.collection('foodcategory');
        const foodCategoryData = await foodCategoryCollection.find({}).toArray();

        // Assign data to global variables
        global.fooddata = foodfetchedData;
        global.foodcategory = foodCategoryData;

    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = mongodb;
