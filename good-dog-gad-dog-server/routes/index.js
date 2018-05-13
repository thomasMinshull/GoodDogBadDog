var express = require('express');
var router = express.Router();
var dog = require('../model/dog');

/* /dog?id=url  */
router.get('/dog', function(req, res) {
  const id = req.query.id
  
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

/* /dog?id=url&vote=2 */ 
router.put('/dog', function(req, res) {
  const id = req.query.id; 
  const vote = req.query.vote; 

  dog.getVoteByID(id, (err, result) => {
    if (err) return res.sendStatus(500).json(err);

    if (result.length == 0) {
      dog.create(id, vote, (err) => { 
        if (err) return res.sendStatus(500).json(err);

        return res.sendStatus(200); 
      });
    } else {
      console.log('happy path id: ' + id + ' vote: ' + vote); 
      dog.voteForID(id, vote, (err) => {
        if (err) return res.sendStatus(500).json(err);
        
        console.log('updated vote count for dog with id: ' + id);
        return res.sendStatus(200); 
      });
    }
  });
});

router.get('/', function(req, res) {
  res.send("Good-Dog-API"); 
});

module.exports = router;
