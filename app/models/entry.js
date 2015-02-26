import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  username: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  photo_url: DS.attr('string'),
  year: DS.attr('string')
});
