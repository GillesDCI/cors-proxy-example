const express = require('express');
const data = require('../posts-data');

const router = express.Router();

//root of the router
router.get('/', (req, res) => {
    return res.status(200).json(data);
})

router.post('/newpost', (req, res) => {

    let maxId = Math.max.apply(Math, data.map(function(o) { return o.id; }));
    
    var newPost = {
        id:maxId + 1,
        title:req.body.title,
        content:req.body.content
    };

    data.push(newPost);

    res.status(200).json({message:"Post was created"});
});


module.exports = router;