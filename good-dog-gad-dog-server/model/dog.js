var db = require('./db');

exports.create = function(id, vote, done) {
    var values = [id, vote]
    
    db.get().query('INSERT INTO Dogs (Id, Vote) VALUES(?, ?)', values, function(err, result) {
      if (err) return done(err)
      done(null, result.insertId)
    })
  }
  
exports.getVoteByID = function(id, done) {
  db.get().query('SELECT Vote FROM Dogs WHERE Id=?', id, function(err, result, fields) {
    if (err) return done(err);
    done(null, result)
  });
}

exports.upvoteID = function(id, done) {
  db.get().query({sql: `UPDATE Dogs SET Vote=Vote+1 WHERE Id='${id}'`, timeout: 1000}, function (err) {
    if (err) return done(err)
    done()
  })
}

exports.downvoteID = function(id, done) { 
  db.get().query({sql: `UPDATE Dogs SET Vote='Vote-1' WHERE Id='${id}'`, timeout: 1000}, function (err) {
    if (err) return done(err)
    done()
  })
}
  
