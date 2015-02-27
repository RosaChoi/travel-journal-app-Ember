import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var entry = this.modelFor('entries/show');
    return this.store.createRecord('comment', {entry: entry});
  }
});
