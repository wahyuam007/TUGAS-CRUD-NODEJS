let router = require('express').Router();

//set default API response
router.get('/', function(req, res){
    res.json({
        status:'API its Working',
        message:'Welcome to RESTHUB crafted!'
    });
});

//import siswa Controller
var siswaController = require('./siswaController');

// contact APIRoutes
router.route('/siswas')
.get(siswaController.index)
.post(siswaController.new);
router.route('/siswas/:siswa_id').get(siswaController.view)
.patch(siswaController.update)
.put(siswaController.update)
.delete(siswaController.delete);
//export API 
// router
module.exports = router;