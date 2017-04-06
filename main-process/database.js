var Datastore = require('nedb');
db = new Datastore({filename:'db/persons.db', autoload:true});
exports.addPerson = function(firstname, lastname){
  var person = {
    'firstname' : firstname,
    'lastname'  : lastname
  }
  db.insert(person, function(err, newDoc){
    ;
  })
}

exports.getPersons = function(fnc){
  db.find({}, function(err, docs){
    fnc(docs);
  })
}

exports.deletePerson = function(id){
  db.remove({_id:id}, {}, function(err,numRemoved){
    
  });
}
