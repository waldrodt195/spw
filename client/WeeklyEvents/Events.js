Template.Events.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('entries');
	});
});

Template.Events.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('followingcollection');
	});
});

Template.Events.helpers({
	entries: ()=> {
		return Entries.find({});
	}
});