var Cartoon = require('../models/cartoon'); 
 
// List of all Cartoons 
exports.cartoon_list = async function(req, res) { 
    try{ 
        theCartoon = await Cartoon.find(); 
        res.send(theCartoon); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Cartoon. 
exports.cartoon_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id); 
}; 
 
// Handle Cartoon create on POST. 
exports.cartoon_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Cartoon create POST'); 
}; 
 
// Handle Cartoon delete form on DELETE. 
exports.cartoon_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Cartoon delete DELETE ' + req.params.id); 
}; 
 
// Handle Cartoon update form on PUT. 
exports.cartoon_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Cartoon update PUT' + req.params.id); 
}; 