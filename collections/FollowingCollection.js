// New collection FollowingCollection
FollowingCollection = new Mongo.Collection('followingcollection');

// Allows insertions and updates to the FollowingCollection
FollowingCollection.allow({
    insert: function(userId, doc){
        return true;
    }, 
    update: function(userId, doc){
        return !!userId;
    }
});

Meteor.methods({
	// Deletes entries from the collection
    unfollow: function(id, owner){
        	FollowingCollection.remove(id);
        
	}
});

