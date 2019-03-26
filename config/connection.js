var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/TinyImprovements', { useNewUrlParser: true });
module.exports = mongoose