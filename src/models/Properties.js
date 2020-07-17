const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    image: String,
    location: String,
    description: String,
    price: String,
    bedrooms: String,
    bathrooms: String,
    listerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property