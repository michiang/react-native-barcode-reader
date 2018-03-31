import mongoose, { Schema } from 'mongoose';

// Define movie schema
let upcCodes = new Schema({
    product_name: String,
    upc: {
        type: String,
        unique: true,
    }
});

// Export Mongoose model
export default mongoose.model('upc', upcCodes);