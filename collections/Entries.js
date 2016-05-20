// New collection Entries
Entries = new Mongo.Collection('entries');

// Allows insertions and updates to Entries
Entries.allow({
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
        label: "Place"
    },
    time: {
        type: String,
        label: "Time" 
    }
});

// Schema for entry details
EntrySchema = new SimpleSchema({
    date: {
        type: String,
        label: "Day - Date",
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
    inFollow:{
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform:{
            type: "hidden"
        }
    }
});

// Methods to alter collection data
Meteor.methods({
    // Toggles the boolean value of inFollow
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
    // Deletes events from the collection
    deleteEvent: function(id){
        Entries.remove(id);
    }
});

// Attatches the schema to the collection
Entries.attachSchema(EntrySchema);