console.log("loading")
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3001;

// Define a Mongoose schema for the "foodItems" collection
const foodItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String
});

const userSchema = new mongoose.Schema({
    uname: String,
    pass: String
})

// Create a Mongoose model for the "foodItems" collection
const Starters = mongoose.model('starters', foodItemSchema);
const Maincourse = mongoose.model('maincourse', foodItemSchema);
const Drinks = mongoose.model('drinks', foodItemSchema);
const Desserts = mongoose.model('desserts', foodItemSchema);
const Users = mongoose.model('users', userSchema);

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define a route to retrieve data from the "foodItems" collection
app.get('/getStarters', (req, res) => {
    Starters.find({})
        .then(starters => {
            res.json(starters);
        })
        .catch(error => {
            console.error('Error retrieving data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});
app.get('/getMaincourse', (req, res) => {
    Maincourse.find({})
        .then(maincourse => {
            res.json(maincourse);
        })
        .catch(error => {
            console.error('Error retrieving data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});
app.get('/getDrinks', (req, res) => {
    Drinks.find({})
        .then(drinks => {
            res.json(drinks);
        })
        .catch(error => {
            console.error('Error retrieving data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});
app.get('/getDesserts', (req, res) => {
    Desserts.find({})
        .then(desserts => {
            res.json(desserts);
        })
        .catch(error => {
            console.error('Error retrieving data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});
app.get('/getUsers', (req, res) => {
    Users.find({})
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            console.error('Error retrieving data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
