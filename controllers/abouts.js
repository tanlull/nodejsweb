const News = require("../models/News");

exports.index = (req,res) => {
    
    let products = [
        {category: 'เครื่องดื่ม'},
        {drinks: [
          {id:1 , name: 'coke'},
          {id:2, name: 'pepsi'}
        ]
      
      }
      ];
    
      res.render('about', { 
          title: 'My name is Tanya',
        products:products,
        news:News ,//Model,
        items:res.locals.items
    });
}