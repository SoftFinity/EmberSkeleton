var App;

App = require('app');

module.exports = App.TablesRoute = Ember.Route.extend({
  model: function() {
  	return App.Table.find();
  }
});