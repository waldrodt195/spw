// This file publishes all collections to the server

Meteor.publish('entries', function(){
	return Entries.find();
});

Meteor.publish('singleEvent', function(id){
	check(id, String);
	return Entries.find({_id: id});
});

Meteor.publish('clubs', function(){
	return Clubs.find();
});

Meteor.publish('followingcollection', function(){
	return FollowingCollection.find();
});