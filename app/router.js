import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('entries', function() {
    this.route('new');
    this.route('edit', {path: '/:entry_id/edit'});
    this.route('show', {path: '/:entry_id'}, function() {
      this.route('comments');
    });
  });
});

export default Router;
