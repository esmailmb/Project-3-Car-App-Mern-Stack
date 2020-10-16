const mongoose = require("mongoose");

const carvinSchema = new mongoose.Schema({
    vin: {type: String, required:true},
    make: {type: String, required:true},
    model: {type: String},
    year: {type: String},
    make: {type: String},
    enginehp: {type: String},
    enginecylinder: {type: String},
    drivetype: {type: String},
});

module.exports = Carvin = mongoose.model("Carvin", carvinSchema);