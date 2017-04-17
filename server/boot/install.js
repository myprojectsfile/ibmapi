'use strict';

module.exports = function(app) {
 var User = app.models.User;
 var Role = app.models.Role;
 var RoleMapping = app.models.RoleMapping;

User.create([
    {username: 'John', email: 'john@doe.com', password: 'opensesame'},
    {username: 'Jane', email: 'jane@doe.com', password: 'opensesame'},
    {username: 'Bob', email: 'bob@projects.com', password: 'opensesame'}
  ], function(err, users) {
    if (err) console.log(err);

    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) console.log(err);

      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[2].id
      }, function(err, principal) {
        console.log(err);
      });
    });
  });

};
