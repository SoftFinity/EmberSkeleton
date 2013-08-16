var App;

// ===== Namespace =====
App = require('app');

// ===== Router =====
App.Router.map(function() {
	this.resource('tables', function(){
		this.resource('table', {path: ':table_id'});
	}); 
});

// ===== Routes =====
require('routes/IndexRoute');
require('routes/TablesRoute');

// ===== Store =====
App.Store = DS.Store.extend({
	revision: 13,
	adapter: 'DS.FixtureAdapter'
});

// ===== Models =====
require('models/Table');

// ===== Views =====


// ===== Controllers =====

require('controllers/TablesController');
// ===== Template Helpers =====

// ===== Templates =====
require('templates/application');
require('templates/index');
require('templates/tables');
require('templates/_tableMenu');
require('templates/table');

