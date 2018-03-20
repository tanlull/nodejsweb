const items = require('../models/Items')
const connection = require('../config')

exports.index = (req,res) => {
    let header = req.param.header
    connection.query('SELECT * from block', function (error, results, fields) {
      if (error) throw error; 
      connection.query('SELECT count(*) as count from block', function (error, count, fields) {
        if (error) throw error;
      res.render('block/index',{blog:results,header:header,count:count[0].count});
      });
      //console.log('The solution is: ', results[0].solution);
    });
}

exports.delete = (req,res) => {
    let id = req.params.id
    console.log(id)
   // res.send(req.params)
    
    connection.query('delete from block where id = ?',id, function (error, results, fields) {
        if (error) throw error;
        res.redirect('/block')
      });
}

exports.create = (req,res) => {
    res.render('block/create');

}

exports.store = (req,res) => {
    let post = req.body;
    console.log(post);
   connection.query('insert into block SET ?',post, function (error, results, fields) {
        if (error) throw error;
        res.redirect('/block')
      });

}