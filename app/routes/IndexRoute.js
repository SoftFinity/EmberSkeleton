var App;

App = require('app');

App.IndexRoute = Ember.Route.extend({
	redirect:function(){
		this.transitionTo('tables');
	}
});