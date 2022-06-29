const productSchema = require('../../models/product');
const products = require('./dbProvisional')

const getProducts = (req, res) => {

    const { nombre } = req.query
    console.log(nombre)
    if (nombre) {
        productSchema.find({ name: nombre })
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json({ message: err });
            });
    }
    else {
        productSchema.find()
            .then((data) => {
<<<<<<< HEAD
                res.json(data);
=======
                res.json(data.concat(products));
>>>>>>> 51d060088fcf51c41103bce252701db6ecd4b1ba
            })
            .catch((err) => {
                res.json({ message: err });
            });
    }
}
module.exports = getProducts;
