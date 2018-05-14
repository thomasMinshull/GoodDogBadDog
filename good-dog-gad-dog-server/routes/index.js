var express = require('express');
var router = express.Router();
var dog = require('../model/dog');

/* /dog?id=url  */
router.get('/dog', function(req, res) {
  const id = req.query.id;
  console.log('id: ' + id ); 
  
  dog.getVoteByID(id, (err, result) => {
    if (err) return res.sendStatus(500).json(err);

    if (result.length == 0) {
      dog.create(id, 0, (err) => { 
        if (err) return res.sendStatus(500).json(err);
       
        return res.json([ { "Vote" : 0 } ] );
      });
    } else {
      return res.json(result); 
    }
  });
})

/* /upvote?id=url */ 
router.put('/upvote', function(req, res) { 
  const id = req.query.id; 

  dog.upvoteID(id, (err, result) => {
    if (err) return res.sendStatus(500).json(err);

    return res.sendStatus(200);
  })
});

/* /downvote?id=url */ 
router.put('/downvote', function(req, res) {
  const id = req.query.id; 

  dog.downvoteID(id, (err, result) => {
    console.log(' failing in down vote with err: ' + err)
    if (err) return res.sendStatus(500).json(err);

    return res.sendStatus(200);
  })
});

router.get('/', function(req, res) {
  res.send("Good-Dog-API"); 
});

module.exports = router;
