import mongoose from 'mongoose'


const corporateVehicleRegistration = new mongoose.Schema({
    companyName: String,
    contactNumber: String,
    email: String,
    link: String,
    logo: String,
    image: String,
    package: {
        type: Boolean,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    paymentStatus: {
        type: Boolean,
        default: 0
    }
})

const CorporteVehicleRegistration = mongoose.model('CorporteVehicleRegistration', corporateVehicleRegistration)

module.exports = CorporteVehicleRegistration