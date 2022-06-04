var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Orders' });
});

router.get('/orders', function(req, res, next) {
  res.render('order_list', {  });
})

router.get('/order/create', function(req, res, next) {
  res.render('order_form', {  });
})

router.get('/:orderDetail', function(req, res, next) {
    res.render('detail', { 
        id : req.params.orderDetail,
        status : "delivered",
        customer : "John Doe",
        created: "12/12/2018",
        items :[{name: "Pizza", price: "10.00", quantity: "1"},
         {name: "Pepsi", price: "2.00", quantity: "1"}],
        total : "14.00",
        tax : "1.00",
        tip : "1.00",
        address : "123 Main St",
     });
  });




  router.get('/clients', function(req, res, next) {
    res.render('client_list', {  });
  });

  router.get('/clients/:clientId', function(req, res, next) {
    res.render('client_detail', {  });
  })

  router.get('/client/create', function(req, res, next) {
    res.render('client_form', {  });
  })




module.exports = router;
