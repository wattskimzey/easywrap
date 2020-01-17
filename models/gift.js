var mongoose = require("mongoose");

var GiftSchema = new mongoose.Schema({
    recipient: {
        type: String
    },
    title: {
        type: String
    },
    price: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

module.exports = mongoose.model("Gift", GiftSchema);