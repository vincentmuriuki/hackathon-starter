const mongoose = require('mongoose');

const carListingSchema = new mongoose.Schema({
  residence: String,
  typeOfVehicle: String,
  make: String,
  model: String,
  plateNumber: String,
  alternativePhoneNumber: String,
  price: String,
  image: String,
  listerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const CarListing = mongoose.model('CarListing', carListingSchema);

module.exports = CarListing;
