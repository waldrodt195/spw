Template.Event.onCreated(function(){
	//reacitve variables come from reactive-var package
	//new reactive variable, used to set edit option
	this.edit  = new ReactiveVar(false);
	this.edit.set(false);

});

Template.Event.helpers({
	updateEvent: function() {
		return this._id;
	}, 
	//toggle edit for just one template
	edit: function(){
		return Template.instance().edit.get();
	}
});

Template.Event.events({
	'click .toggle-follow': function(){
		Meteor.call('toggleFollow', this._id, this.inFollow);
		
		if(this.inFollow == false){
			FollowingCollection.insert(
				{this, _id:this._id, owner:Meteor.userId(), date:this.date,
				name:this.name, place:this.details.place, time:this.details.time, follow:this.inFollow});
		}
		else{
			Meteor.call('unfollow',this._id, this.owner);
		}
	}, 
	'click .fa-trash': function(){
		Meteor.call('deleteEvent', this._id);
	},
	//toggle edit for just one template
	'click .fa-pencil': function(event, template){
		template.edit.set(!template.edit.get());
	}
});