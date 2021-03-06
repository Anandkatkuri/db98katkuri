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
 
// for a specific cartoon. 
exports.cartoon_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Cartoon.findById(req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
 
//Handle cartoon update form on PUT. 
exports.cartoon_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Cartoon.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.cartoon_type)  
               toUpdate.cartoon_type = req.body.cartoon_type; 
        if(req.body.age) toUpdate.age = req.body.age; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

// Handle Costume delete on DELETE. 
exports.cartoon_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Cartoon.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.cartoon_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Cartoon.findById( req.query.id) 
        res.render('cartoondetail',  
{ title: 'cartoon Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a cartoon. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.cartoon_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('cartooncreate', { title: 'cartoon Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.cartoon_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Cartoon.findById(req.query.id) 
        res.render('cartoonupdate', { title: 'cartoon Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.cartoon_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Cartoon.findById(req.query.id) 
        res.render('cartoondelete', { title: 'cartoon Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 