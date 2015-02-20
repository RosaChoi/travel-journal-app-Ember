import Ember from 'ember';

export default Ember.Controller.extend({
  message: " ",
  actions: {
    createEntry: function() {
      this.get('model').save();
      this.set('model', '');
      this.set('message', 'Successfully created a journal!')
    }
  }
});
