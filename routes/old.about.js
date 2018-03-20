var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  /*
  let products = [
    {id:1 , name: 'coke'},
    {id:2, name: 'pepsi'}
  ];
*/

  let products = [
    {category: 'เครื่องดื่ม'},
    {drinks: [
      {id:1 , name: 'coke'},
      {id:2, name: 'pepsi'}
    ]
  
  }
  ];

  res.render('about', { title: 'My name is Tanya',
    products:products
});
});

module.exports = router;
