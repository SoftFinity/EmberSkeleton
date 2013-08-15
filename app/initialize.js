var App;

// ===== Namespace =====
App = require('app');

// ===== Router =====
App.Router.map(function() {
	this.resource('tables'); 
});

// ===== Routes =====
require('routes/IndexRoute');
require('routes/TablesRoute');

// ===== Store =====
App.Store = DS.Store.extend({
	revision: 11,
	adapter: 'DS.FixtureAdapter'
});

// ===== Models =====
require('models/Table');

// ===== Views =====


// ===== Controllers =====


// ===== Template Helpers =====

// ===== Templates =====
require('templates/application');

require('templates/index');

require('templates/tables');

