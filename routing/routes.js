if(Meteor.isClient){

	// Routes to the events page on login
	Accounts.onLogin(function(){
		FlowRouter.go('weekly-events');
	});

	// Routes to the homepage on logout
	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

// Renders the home layout when home
FlowRouter.route('/', {
	name: 'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('weekly-events');
		}
		BlazeLayout.render('HomeLayout');
	}
});

// Renders the events layout page
FlowRouter.route('/weekly-events', {
	name: 'weekly-events',
	action(){
		BlazeLayout.render('AppLayout', {main: 'Events'});
	}
});

FlowRouter.route('/event/:id', {
	name: 'event',
	action(){
		BlazeLayout.render('AppLayout', {main: 'EntryListing'});
	}
});

// Routes to and Renders the Following page
FlowRouter.route('/following', {
	name: 'following', 
	action(){
		BlazeLayout.render('AppLayout', {main: 'Following'});
	}
});

// Routes to and Renders the Clubs Page
FlowRouter.route('/clubs', {
	name: 'club', 
	action(){
		BlazeLayout.render('AppLayout', {main: 'Club'});
	}
});