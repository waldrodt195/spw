Template.Event.onCreated(function(){
	//reacitve variables come from reactive-var package
	//new reactive variable, used to set edit option
	this.edit  = new ReactiveVar(false);
});

// allows for updates and deletions of events
Template.Event.helpers({
	updateEvent: function() {
		return this._id;
	}, 
	//toggle edit for just one template
	edit: function(){
		return Template.instance().edit.get();
	} 
});

// handles click events for the Event template
Template.Event.events({
	// Calls toggle follow and flips the boolean of the inFollow value
	'click .toggle-follow': function(){
		Meteor.call('toggleFollow', this._id, this.inFollow);;
		
		if(this.inFollow == false){
			// adds the followed event into a new collection with the use's id
			FollowingCollection.insert(
				{this, _id:this._id, owner:Meteor.userId(), date:this.date,
				name:this.name, place:this.details.place, time:this.details.time, follow:this.inFollow});
		}
		else{
			// removes the the item the user wants to unfollow form the following collection
			Meteor.call('unfollow',this._id, this.owner);
		}
	}, 
	// handles the deletion of an event when the trash is clicked
	'click .fa-trash': function(){
		Meteor.call('deleteEvent', this._id);
	},
	//toggle edit for just one template
	'click .fa-pencil': function(event, template){
		template.edit.set(!template.edit.get());
	}
});