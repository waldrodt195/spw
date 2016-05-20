// New collection Clubs
Clubs = new Mongo.Collection('clubs');

// Allows insertions and updates to Clubs
Clubs.allow({
	insert: function(userId, doc){
		return !!userId;
	}, 
	update: function(userId, doc){
		return !!userId;
	}
});

// Sub schema for place and time
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

// Schema for club details
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

// Handles club deletion
Meteor.methods({
	deleteClub: function(id){
		Clubs.remove(id);
	}
});

// Attatches the schema to the collection
Clubs.attachSchema(ClubSchema);