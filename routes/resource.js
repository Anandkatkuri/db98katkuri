var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var cartoon_controller = require('../controllers/cartoon'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// cartoon ROUTES /// 
 
// POST request for creating a cartoon.  
router.post('/cartoon', cartoon_controller.cartoon_create_post); 
 
// DELETE request to delete cartoon. 
router.delete('/cartoon/:id', cartoon_controller.cartoon_delete); 
 
// PUT request to update cartoon. 
router.put('/cartoon/:id', cartoon_controller.cartoon_update_put); 
 
// GET request for one cartoon. 
router.get('/cartoon/:id', cartoon_controller.cartoon_detail); 
 
// GET request for list of all cartoon items. 
router.get('/cartoon', cartoon_controller.cartoon_list); 
 
module.exports = router; 