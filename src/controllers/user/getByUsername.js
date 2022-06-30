const userSchema = require('../../models/user');

const getByUsername = async (req, res) => {
    const Username = req.body.Username
    try {
        const user = await userSchema.find({ Username: Username });
        res.json(user);
    } catch (error) {
        console.log(error, 'error');
    }
}
module.exports = getByUsername;