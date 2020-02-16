// siswaController

// import siswa model
var Siswa = require('./siswaModel');

//handle index actions
exports.index = function(req, res){
    Siswa.get(function(err, siswas){
        if(err){
            res.json({
                status:'error',
                message:'error',
            });
        }
        res.json({
            status:'success',
            message:"Siswa retrieved successfully",
            data:siswas
        });
    });
};

//handle create siswa actions
exports.new = function(req, res){
    var siswa = new Siswa();
    siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
    siswa.tanggallahir = req.body.tanggallahir;
    siswa.jeniskelamin = req.body.jeniskelamin;
    siswa.hobi = req.body.hobi;
// save siswa and check error
    siswa.save(function(err){
        //if (err)
        //res.json(err)
        res.json({
            message:'New Siswa Created!',
            data:siswa
        });
    });
};

exports.view = function(req, res){
    Siswa.findById(req.params.siswa_id, function(err, siswas)
    {
        if(err)
            res.send(err);
        res.json({
            message:'Siswa  details loading..',
            data:siswas
        });
    });
};
exports.update = function(req, res){
    Siswa.findById(req.params.siswa_id, function (err, siswa){
        if(err)
            res.send(err);
        siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
        siswa.tanggallahir = req.body.tanggallahir;
        siswa.jeniskelamin = req.body.jeniskelamin;
        siswa.hobi = req.body.hobi;
        // save siswas
        siswa.save(function(err){
            if(err)
                res.send(err);
            res.json({
                status:'success',
                message:'Siswa Info Updated!',
                data:siswa
            });
        });
    });
}

// handle dete data
exports.delete = function(req, res){
    Siswa.remove({
        _id:req.params.siswa_id
    }, function(err, siswas){
        if(err)
            res.send(err);
        res.json({
            status:'success',
            messsage:'Siswa Info Delete'
        });
    });
}