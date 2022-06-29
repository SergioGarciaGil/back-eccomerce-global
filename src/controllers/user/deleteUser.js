const userSchema = require('../../models/user');

const deleteUser = (req, res) => {
    const { dni } = req.params;
<<<<<<< HEAD
    console.log(dni);
    userSchema.deleteOne({ dni: dni })

        .then((data) => {
            console.log('usuario borrado');
            
=======

    userSchema.deleteOne({ dni: dni })

        .then((data) => {
>>>>>>> 51d060088fcf51c41103bce252701db6ecd4b1ba
            res.json(data);//responde con los datos del usuario creado     
        })
        .catch((err) => {
            res.json({ message: err });
        });
}
module.exports = deleteUser;