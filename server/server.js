// Starts the server and executes the fucntions in the startup
Meteor.startup(function () {
    /*if(Meteor.users.find().count() > 1){
        var users = [
          {name:'Admin user',email:'admin',roles:['admin']},
          {name:'Normal User', username:'normal-user', roles:['view']}
        ];
        _.each(users,function(userData){
            var userid = Accounts.createUser({
                email:'admin@potsdam.edu',
                password:'potsdam1816',
                profile:{name:'admin'}
            })

            Meteor.users.update({_id:userid},{$set:{'emails.0.verified':true}});
            Roles.addUsersToRoles(userid,'admin');
        })
    }*/
});
