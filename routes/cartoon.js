var express = require('express'); 
const cartoon_controlers= require('../controllers/cartoon'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', cartoon_controlers.cartoon_view_all_Page ); 
module.exports = router; 