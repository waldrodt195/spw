// Subscribes to entries collection on creation
Template.Following.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('entries');
	});
});

// Subscribes to following collection on creation
Template.Following.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('followingcollection');
	});
});

// returns all of the events the user has subscribed to
Template.Following.helpers({
	followingcollection: ()=> {
		return FollowingCollection.find({owner:Meteor.userId()});
	}
});