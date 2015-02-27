import Ember from 'ember';

export default Ember.Controller.extend({



  actions: {
    deleteEntry: function(model) {
      var _this = this;
      model.destroyRecord().then(function(){
        _this.transitionToRoute('entries.index');
      });
    },
    addLike: function(model) {
      var likes = model.get('like');
      console.log(likes);
      model.set('like', likes + 1);
      model.save();
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
