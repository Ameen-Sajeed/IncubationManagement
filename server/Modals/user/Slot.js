const mongoose = require('mongoose');


const slotsBooking = new mongoose.Schema({
    sloatNo: {
        type: String,
        // required: true,
    },
    status: {
        type: Boolean,
        default:false,
        // required: true,
    },
    bookedId: {
        type: String,
        // required: true,
    }
})

const Slotbook= mongoose.model('slots', slotsBooking)

module.exports = Slotbook;