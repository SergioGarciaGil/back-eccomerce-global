const userSchema = require('../../models/user');

const getUsers = (req, res) => {
    console.log('El usuario logeado es =',req.email);
    userSchema.find()

        .then((data) => {
            res.json(data)//responde con los datos de todos los user   
        })
        .catch((err) => {
            res.json({ message: err });
        });
}

<<<<<<< HEAD
  
=======

>>>>>>> 51d060088fcf51c41103bce252701db6ecd4b1ba
module.exports = getUsers;