var express = require('express');
var router = express.Router();
var dog = require('../model/dog');

/* /dog/new?id=url&vote=1 */
router.put('/dog/new', function(req, res) {
  const id = req.param('id');
  const vote = req.param('vote');

  console.log('id: ' + id + ' vote: ' + vote);

  dog.create(id, vote, (err) => { 
    if (!err) {
      console.log('new dog record created.');
      return res.sendStatus(200); 
    } else {
      console.log('failed to create new dog record. err: ' + err);
      return res.sendStatus(500).json(err);
    }
  });
});

/* /dog?id=url  */
router.get('/dog', function(req, res) {
  const id = req.query.id
  
  dog.getVoteByID(id, (err, result) => {
    if (!err) {
      console.log('fetched dog with id: ' + id);
      console.log('rows: ' + result); 
      return res.json(result); // [ { "Vote" : 30 } ] 
    } else {
      console.log('failed to fetch dog with id' + id + ' err: ' + err); 
      return res.sendStatus(500).json(err);
    }
  });
})

/* /dog?id=url&vote=2 */ 
router.put('/dog', function(req, res) {
  const id = req.query.id; 
  const vote = req.query.vote; 

  dog.voteForID(id, vote, (err) => {
    if (!err) {
      console.log('updated vote count for dog with id: ' + id);
      return res.sendStatus(200); 
    } else {
      console.log('failed to update count for dog with id: ' + id + 'err: ' + err);
      return res.sendStatus(500).json(err);
    }
  });
});

router.get('/', function(req, res) {
  res.send("Good-Dog-API"); 
});

module.exports = router;
