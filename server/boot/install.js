'use strict';

module.exports = function(app) {
 var User = app.models.User;
 var Role = app.models.Role;
 var RoleMapping = app.models.RoleMapping;

User.create([
    {username: 'admin', email: 'admin@khodamooz.com', password: '123'}
  ], function(err, users) {
    if (err) console.log(err);

    //create the admin role
    Role.create({
      name: 'administrator'
    }, function(err, role) {
      if (err) console.log(err);

      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        console.log(err);
      });
    });
  });

};
