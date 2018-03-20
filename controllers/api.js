const News = require("../models/News");

exports.index = (req,res) => {
    return res.status(200).json(News)
}