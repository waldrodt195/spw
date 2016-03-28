Template.Following.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('entries');
	});
});

Template.Following.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('followingcollection');
	});
});

Template.Following.helpers({
	/*entries: ()=> {
		return Entries.find({inFollow: true});
	}*/
	followingcollection: ()=> {
		return FollowingCollection.find({owner:Meteor.userId()});
	}
});