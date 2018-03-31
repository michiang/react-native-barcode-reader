import mongoose from 'mongoose';
import upcCodes from './database/upc';

const codes = [
    {
        product_name: "Lacroix Tangerine",
        upc: "24463061163",
    },
    {
        product_name: "ABC Sparkling water",
        upc: "52000328660",
    },
    {
        product_name: "Luke's cheddar chips",
        upc: "84114112729",
    }
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/upc');

// Go through each upc
codes.map(data => {
    // Initialize a model with movie data
    const code = new upcCodes(data);
    // and save it into the database
    code.save();
});