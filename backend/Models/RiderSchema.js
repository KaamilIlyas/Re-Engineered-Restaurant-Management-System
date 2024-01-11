const mongoose = require('mongoose');

const RiderSchema = new mongoose.Schema({
  
  riderid:{
    type:Number,
    required:true,
  },

  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'available'
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Rider', RiderSchema);
