Template.Club.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('clubs');
	});
});

Template.Club.helpers({
	clubs: ()=> {
		return Clubs.find({});
	}
});

Template.ClubEntry.onCreated(function(){
	//reacitve variables come from reactive-var package
	//new reactive variable, used to set edit option
	this.edit  = new ReactiveVar(false);
	this.edit.set(false);

});

Template.ClubEntry.helpers({
	updateClub: function() {
		return this._id;
	}, 
	//toggle edit for just one template
	edit: function(){
		return Template.instance().edit.get();
	}
});

Template.ClubEntry.events({ 
	'click .fa-trash': function(){
		Meteor.call('deleteClub', this._id);
	},
	//toggle edit for just one template
	'click .fa-pencil': function(club, template){
		template.edit.set(!template.edit.get());
	}
});