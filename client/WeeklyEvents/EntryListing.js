Template.EntryListing.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleEvent', id);
	});
});

Template.EntryListing.helpers({
	entry: ()=> {
		var id = FlowRouter.getParam('id');
		return Entries.findOne({_id: id});
	}
});