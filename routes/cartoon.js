var express = require('express'); 
const cartoon_controlers= require('../controllers/cartoon'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', cartoon_controlers.cartoon_view_all_Page ); 
module.exports = router; 

/* GET detail costume page */ 
router.get('/detail', cartoon_controlers.cartoon_view_one_Page); 

/* GET create costume page */ 
router.get('/create', cartoon_controlers.cartoon_create_Page); 

/* GET create update page */ 
router.get('/update', cartoon_controlers.cartoon_update_Page); 

/* GET create costume page */ 
router.get('/delete', cartoon_controlers.cartoon_delete_Page); 
 