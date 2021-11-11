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
exports.cartoon_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Cartoon(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.cartoon_type = req.body.cartoon_type; 
    document.size = req.body.size; 
    document.age = req.body.age; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Cartoon delete form on DELETE. 
exports.cartoon_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Cartoon delete DELETE ' + req.params.id); 
}; 
 
// Handle Cartoon update form on PUT. 
exports.cartoon_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Cartoon update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.cartoon_view_all_Page = async function(req, res) { 
    try{ 
        theCartoons = await Cartoon.find(); 
        res.render('cartoon', { title: 'Cartoon Search Results', results: theCartoons }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 