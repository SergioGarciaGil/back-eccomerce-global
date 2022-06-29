const mongoose = require('mongoose');

const userGoogle = new mongoose.Schema({

    name: {
        type: String,
        required: true

    },
    provider: {
        type: String,
        required: true

    },
    provider_id: {
        type: String,
        required: true,
        unique: true

    },
    photo: {
        type: String,
        required: true

    },

    createdAt: {
        type: Date,
        default: Date.now

    }

}
)



module.exports = mongoose.model('Usergogle', userGoogle);
