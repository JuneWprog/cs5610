var Client = require('../models/client')
var async = require('async')
var Order = require('../models/order')

const { body,validationResult } = require("express-validator");

// Display list of all Clients.
exports.client_list = function (req, res, next) {

    Client.find()
        .sort([['family_name', 'ascending']])
        .exec(function (err, list_clients) {
            if (err) { return next(err); }
            // Successful, so render.
            res.render('client_list', { title: 'Client List', client_list: list_clients });
        })

};

// Display detail page for a specific Client.
exports.client_detail = function (req, res, next) {

    async.parallel({
        client: function (callback) {
            Client.findById(req.params.id)
                .exec(callback)
        },
        clients_orders: function (callback) {
            Order.find({ 'client': req.params.id }, 'order_date order_status order_total')
                .exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.client == null) { // No results.
            var err = new Error('Client not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('client_detail', { title: 'Client Detail', client: results.client, client_orders: results.clients_orders });
    });

};

// Display Client create form on GET.
exports.client_create_get = function (req, res, next) {
    res.render('author_form', { title: 'Create Client' });
};

// Handle Client create on POST.
exports.author_create_post = [

    // Validate and sanitize fields.
    body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('family_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
    body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601().toDate(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);
        
        // Create Client object with escaped and trimmed data
        var client = new Client(
            {
                first_name: req.body.first_name,
                family_name: req.body.family_name,
                date_of_birth: req.body.date_of_birth,
                date_of_death: req.body.date_of_death,
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('author_form', { title: 'Create Client', client: client, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Save client.
            client.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new client record.
                res.redirect(client.url);
            });
        }
    }
];



// Display Client delete form on GET.
exports.author_delete_get = function (req, res, next) {

    async.parallel({
        client: function (callback) {
            Client.findById(req.params.id).exec(callback)
        },
        authors_books: function (callback) {
            Order.find({ 'client': req.params.id }).exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err); }
        if (results.client == null) { // No results.
            res.redirect('/catalog/authors');
        }
        // Successful, so render.
        res.render('author_delete', { title: 'Delete Client', client: results.client, author_books: results.authors_books });
    });

};

// Handle Client delete on POST.
exports.author_delete_post = function (req, res, next) {

    async.parallel({
        client: function (callback) {
            Client.findById(req.body.authorid).exec(callback)
        },
        authors_books: function (callback) {
            Order.find({ 'client': req.body.authorid }).exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err); }
        // Success.
        if (results.authors_books.length > 0) {
            // Client has books. Render in same way as for GET route.
            res.render('author_delete', { title: 'Delete Client', client: results.client, author_books: results.authors_books });
            return;
        }
        else {
            // Client has no books. Delete object and redirect to the list of authors.
            Client.findByIdAndRemove(req.body.authorid, function deleteAuthor(err) {
                if (err) { return next(err); }
                // Success - go to client list.
                res.redirect('/catalog/authors')
            })

        }
    });

};

// Display Client update form on GET.
exports.author_update_get = function (req, res, next) {

    Client.findById(req.params.id, function (err, client) {
        if (err) { return next(err); }
        if (client == null) { // No results.
            var err = new Error('Client not found');
            err.status = 404;
            return next(err);
        }
        // Success.
        res.render('author_form', { title: 'Update Client', client: client });

    });
};

// Handle Client update on POST.
exports.author_update_post = [

    // Validate and santize fields.
    body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('family_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
    body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601().toDate(),


    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create Client object with escaped and trimmed data (and the old id!)
        var client = new Client(
            {
                first_name: req.body.first_name,
                family_name: req.body.family_name,
                date_of_birth: req.body.date_of_birth,
                date_of_death: req.body.date_of_death,
                _id: req.params.id
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values and error messages.
            res.render('author_form', { title: 'Update Client', client: client, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid. Update the record.
            Client.findByIdAndUpdate(req.params.id, client, {}, function (err, theauthor) {
                if (err) { return next(err); }
                // Successful - redirect to genre detail page.
                res.redirect(theauthor.url);
            });
        }
    }
];
