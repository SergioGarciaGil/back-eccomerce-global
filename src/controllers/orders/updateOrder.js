const orderSchema = require('../../models/orders');
const nodemailer = require('nodemailer');

const updateOrder = async (req, res) => {

    if (!req.params || !req.body) return res.status(400).send({ message: 'Client has not sent params' });

    const { id } = req.params;

    if (req.body.isPaid) {
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: 'danielperco4@gmail.com',
                pass: 'ttakmtneynhkwmjl'
            }
        });
        console.log(req.body.email)
        var mailOptions = {
            from: 'server Api"<danielperco4@gmail.com>',
            to: req.body.email,
            subject: "server Api",
            text: `Buenos dias , la orden ${req.params.id} ha sido pagada `
        };
        let post = await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(404).json(error.message);
            } else {
                console.log('emial enviado', info);
                next();
            }
        })



        orderSchema.findByIdAndUpdate(id, req.body,
            async (err, lineUpdated) => {
                if (err) return res.status(409).send({ message: 'Internal error, probably error with params' });
                if (!lineUpdated) return res.status(404).send({ message: 'Document not found' });
                return res.status(200).send({ data: lineUpdated });
            });
    }
    else {
        orderSchema.findByIdAndUpdate(id, req.body,
            async (err, lineUpdated) => {
                if (err) return res.status(409).send({ message: 'Internal error, probably error with params' });
                if (!lineUpdated) return res.status(404).send({ message: 'Document not found' });
                return res.status(200).send({ data: lineUpdated });
            });
    }
}
module.exports = updateOrder;