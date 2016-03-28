FollowingCollection = new Mongo.Collection('followingcollection');

FollowingCollection.allow({
    insert: function(userId, doc){
        return true;
    }, 
    update: function(userId, doc){
        return !!userId;
    }
});

Meteor.methods({
    unfollow: function(id, owner){
        	FollowingCollection.remove(id);
        
	}
});

