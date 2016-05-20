// Subcribes to the clubs collection on creation
Template.Club.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('clubs');
	});
});

// Sorts and displays the clubs in alphabetical order
Template.Club.helpers({
	clubs: ()=> {
		return Clubs.find({}, {
			sort: [
				["name", "asc"]
			]
		});
	}
});

Template.ClubEntry.onCreated(function(){
	//reacitve variables come from reactive-var package
	//new reactive variable, used to set edit option
	this.edit  = new ReactiveVar(false);
	this.edit.set(false);

});

// helpers for the club collection
// allow updates and edits
Template.ClubEntry.helpers({
	updateClub: function() {
		return this._id;
	}, 
	//toggle edit for just one template
	edit: function(){
		return Template.instance().edit.get();
	}
});

// click events to handle the edit and delete buttons
Template.ClubEntry.events({ 
	'click .fa-trash': function(){
		Meteor.call('deleteClub', this._id);
	},
	//toggle edit for just one template
	'click .fa-pencil': function(club, template){
		template.edit.set(!template.edit.get());
	}
});