const express = require('express');
const router = express.Router();
const path = require("path");
const { ObjectId } = require("mongodb");
const {saveClientToDB, readAllClients, readOneDocument} = require('../database.js');
const { body, validationResult } = require('express-validator');


/// Client ROUTES ///
// GET request for list of all Clients.
router.get('/', async function (req, res){
    try {
        const data = await readAllClients();
        //res.json(data);
        res.render('client_list',  {title: 'Client List', client_list: data});
    } catch (err) {
        console.log(err);
    }
});


// GET request for creating a Client. 
//*NOTE This must come before route for id (i.e. display client).
router.get('/newclient', async function (req,res){
    res.render('client_form', { title: 'Create A New Client' });
});



// // POST request for creating Client.
router.post('/newclient', 
    // Validate and sanitize fields.
    [body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
    .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('family_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('phone_number').trim().isLength({ min: 6 }).escape().withMessage('Phone number must be specified.')
    .isInt().withMessage('Phone number must be an integer.'),
    body('address').trim().isLength({ min: 1 }).escape().withMessage('Address must be specified.'),
    body('city').trim().isLength({ min: 1 }).escape().withMessage('City must be specified.')
    .isAlphanumeric().withMessage('City has non-alphanumeric characters.')],
    // Process request after validation and sanitization.
    async function (req, res){
        //validate the request
        const errors =  await validationResult(req);
        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('client_form', { title: 'Create A New Client', errors: errors.array() });
            return;
        }
        else {
            try {
            // Extract the validation errors from a request.
                await saveClientToDB(req.body);
                let id = req.body._id.toString();
                res.redirect(`/clients/${id}`);
            } catch (err) {
                console.log(err);
            }
        }
    }
);

// GET request for one Client.
router.get('/:clientId', async function (req, res) {
    try{
        const data = await readOneDocument({_id:ObjectId(req.params.clientId)})
        res.render("client_detail.pug", {
            id: req.params.clientId,
            first_name: data.first_name,
            family_name: data.family_name,
            phone_number: data.phone_number,
            address: data.address,
            city: data.city
        });
    }catch(err){

    }
});







module.exports = router;
