Entries = new Mongo.Collection('entries');

Entries.allow({
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
        label: "Place"
    },
    time: {
        type: String,
        label: "Time" 
    }
});

EntrySchema = new SimpleSchema({
    date: {
        type: String,
        label: "Day - Date",
        /*autoValue: function(){
            return new Date()
        }*/
    }, 
    name: {
        type: String,
        label: "Event"
    },
    description:{
        type: String, 
        label:"Description"
    }, 
    details:{
        label:" ",
        type: Details //sub schema,(Details = single, [Details] = multiple (due to autoform pkg))
    },
    /*place: {
        type: String,
        label: "Place"
    },
    time: {
        type: String,
        label: "Time" 
    },*/

    /*author:{
        type: String, 
        label:"Author",
        autoValue: function(){
            return this.userId
        },
        autoform: {
            type: "hidden"
        }, 
    },*/ 
    inFollow:{
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform:{
            type: "hidden"
        }
    }
});

Meteor.methods({
    toggleFollow: function(id, bool){
        Entries.update(id, {
            $set:{
                inFollow: !bool
            }
        });
        if (bool == true){
            Meteor.call('unfollow', id);
        }
    },
    deleteEvent: function(id){
        Entries.remove(id);
    }
});

Entries.attachSchema(EntrySchema);