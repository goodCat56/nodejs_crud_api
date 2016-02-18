var mongoose = require('mongoose');


/* 
 =====================================================================================
 *  Car model Schema
 *  the schema is simple and flat just now but can be extendend easily to nested shemas
 =====================================================================================
*/

var carSchema = new mongoose.Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    completeName: {type: String, require: true},
    year : {type: Number, required: true},
    color: {type: String, required: true},
    condition: {type: String, required: true},
    gearBox: {type: String, required: true},
    fuel: {type: String, required: true},
    price: {type: Number, required: true},
    mileage: {type: Number, required: true},
    vehicleType: {type: String, required: true},
    generalInfo: {type: String, required: true},
    postedOn: {type: Date, "default": Date.now}
    /*
    ===================================================================================
    * This could be with much more details about the vehicle but for this simple 
    * api it's enough i think. to prove the point
    * here i have used mangoose validation however we will be having validation in our 
    * controller as well.
    ====================================================================================
    */
});

mongoose.model('Car', carSchema);