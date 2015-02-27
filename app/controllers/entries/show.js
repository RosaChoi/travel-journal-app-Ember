import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteEntry: function(model) {
      var _this = this;
      model.destroyRecord().then(function(){
        _this.transitionToRoute('entries.index');
      });
    }
  },
  mapConfiguration: function() {
    return {
      asGoogleMap: ['lat', 'long', 'zoom'],
      lat: this.get('model.latitude'),
      long: this.get('model.longitude'),
      zoom: 8
    };
  }.property('model.latitude', 'model.longitude')
});
