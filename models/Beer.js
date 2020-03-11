const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
    name: String,
    type : String,
    brewery : String,
    tried: Boolean

});

module.exports = mongoose.model('Beer', beerSchema);