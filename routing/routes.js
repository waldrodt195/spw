if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('weekly-events');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('weekly-events');
		}
		BlazeLayout.render('HomeLayout');
	}
});

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

FlowRouter.route('/following', {
	name: 'following', 
	action(){
		BlazeLayout.render('AppLayout', {main: 'Following'});
	}
});

FlowRouter.route('/clubs', {
	name: 'club', 
	action(){
		BlazeLayout.render('AppLayout', {main: 'Club'});
	}
});