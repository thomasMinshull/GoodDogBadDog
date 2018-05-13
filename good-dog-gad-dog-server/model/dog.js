var db = require('./db');

exports.create = function(id, vote, done) {
    var values = [id, vote]
    
    db.get().query('INSERT INTO Dogs (Id, Vote) VALUES(?, ?)', values, function(err, result) {
      if (err) return done(err)
      done(null, result.insertId)
    })
  }
  
exports.getVoteByID = function(id, done) {
  try {
    db.get().query('Select Vote FROM Dogs WHERE Id=?', id, function(err, result, fields) {
      if (err) return done(err);
      done(null, result)
    });
  } catch {
    console.log("Was it caught?")
  }

}

exports.voteForID = function(id, vote, done) {
    var values = [vote, id]
    db.get().query('Update Dogs SET Vote=? WHERE Id=?', values, function (err) {
      if (err) return done(err)
      done(null)
    })
  }
  
