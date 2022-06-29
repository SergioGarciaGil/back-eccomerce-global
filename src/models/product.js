const mongoose = require('mongoose');
<<<<<<< HEAD
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    images: {
        type: Array,
        required: false
    },
    inStock: {
        type: Number,
        required: false
    },
    price: {
        type: Number,
        required: false
=======

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },


    inStock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
>>>>>>> 51d060088fcf51c41103bce252701db6ecd4b1ba
    },
    sizes: {
        type: Array,
    },
    slug: {
        type: String,
<<<<<<< HEAD
        required: false
    },
    tags: {
        type: String,
        required: false
    },
    category: {
        type: Array,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    }
});
=======
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    caterogiras: {
        type: Array,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }

})
>>>>>>> 51d060088fcf51c41103bce252701db6ecd4b1ba

module.exports = mongoose.model('Product', productSchema);

