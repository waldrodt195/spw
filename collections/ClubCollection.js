Clubs = new Mongo.Collection('clubs');

Clubs.allow({
	insert: function(userId, doc){
		return !!userId;
	}, 
	update: function(userId, doc){
		return !!userId;
	}
});

Details = new SimpleSchema({
	place: {
		type: String,
		label: "Meeting Place"
	},
	time: {
		type: String,
		label: "Time" 
	}
});

ClubSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Club Name"
	},
	details:{
		label:" ",
		type: Details //uses the sub schema
	},

	contact: {
		type: String,
		label: "Contact(name - email)"
	}
});

Meteor.methods({
	deleteClub: function(id){
		Clubs.remove(id);
	}
});

Clubs.attachSchema(ClubSchema);