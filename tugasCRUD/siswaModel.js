// filename : siswaModel.js

var mongoose = require('mongoose');

//setup schema
var siswaSchema = mongoose.Schema({
    nama:{
        type:String,
        required:true,
    },
    tanggallahir:{
        type:Date,
        required:true,
    },
    jeniskelamin:String,
    hobi:String,
});

//export siswa Model
var siswa = module.exports = mongoose.model('siswa', siswaSchema);
module.exports.get = function(callback, limit){
    siswa.find(callback).limit(limit);
}