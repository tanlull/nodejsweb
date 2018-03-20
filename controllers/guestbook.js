const items = require('../models/Items')

exports.index = (req,res) => {
    res.locals.items = items; // assign global variable (items) that can be called by any view
   
    res.render('guestbook/index'
    ,{title: "Guestbook จ่ะ"});

}

exports.create = (req,res) => {
    res.render('guestbook/create');

}

exports.store = (req,res) => {
    


    if(!req.body.title || !req.body.message){
        res.status(400).send('Please fill all form')
        return;
    }
        //console.log(req.body)
        //res.send(req.body)
        //res.render('guestbook/create');
        items.push(
            {
                title:req.body.title,
                message: req.body.message,
                guest: req.body.guest
            }
        );

        res.redirect("/guestbook")
}