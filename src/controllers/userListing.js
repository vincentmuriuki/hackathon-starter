const CarListing =  require('../models/CarListing');
const SendEmail = require('../utils/sendEmail');

exports.getListingPage = (req, res, next) => {
  res.render('rental/listing/add_listing', {
    title: 'Add Listing',
  });
};

exports.postListing = (req, res) => {
  const listing = new CarListing({
    residence: req.body.residence,
    typeOfVehicle: req.body.typeOfVehicle,
    make: req.body.make,
    model: req.body.model,
    plateNumber: req.body.plateNumber,
    alternativePhoneNumber: req.body.alternativePhoneNumber,
    image: req.body.image,
    price: req.body.price,
  });

  listing.save((err) => {
    if (err) return next(err);
    res.redirect('/my_listings');
  });
};

exports.getUpdateListingPage = (req, res, next) => {
  res.render('rental/listing/update', {
    title: 'Update Listing',
  });
};

exports.postUpdateListing = (req, res, next) => {
  CarListing.findById(req.listing.id, (err, listing) => {
    if (err) {
      return next(err);
    }
    listing.residence = req.body.residence || '';
    (listing.typeOfVehicle = req.body.typeOfVehicle || ''),
      (listing.make = req.body.make || ''),
      (listing.model = req.body.model || ''),
      (listing.plateNumber = req.body.plateNumber || ''),
      (listing.alternativePhoneNumber = req.body.alternativePhoneNumber || ''),
      (listing.image = req.body.image);
    listing.save((err) => {
      if (err) {
        req.flash('errors', { msg: 'We could not update your records.' });
        return res.redirect('/');
      }
      req.flash('success', { msg: 'Listing data has been updated' });
      SendEmail(
          req.user.email,
          process.env.EMAIL,
          'You have updated your listing info',
          'Your listing info has been updated'
      )
      res.redirect('/');
    });
  });
};

exports.deleteListing = (req, res, Next) => {
    CarListing.deleteOne({ _id: req.listing.id }, (err) => {
        req.flash('info', { msg: 'Your listing has been deleted' })
        res.redirect('/')
    })
}