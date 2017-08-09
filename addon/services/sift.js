/* globals FastBoot */
import Ember from 'ember';

export default Ember.Service.extend({
  init: function() {
    this._super();

    const isFastBoot = typeof FastBoot !== 'undefined';

    if (!this.hasSift() && (this.config && this.config.environment !== 'test') && !isFastBoot) {
      Ember.Logger.warn('Segment.io is not loaded yet (window.analytics)');
    }
  },

  hasSift: function() {
    return !!(window.analytics && typeof window.analytics === "object");
  },

  trackSift: function() {
    Ember.Logger.warn('SET UP SIFT USER');
  },

  siftUser: function(userId) {
    Ember.Logger.warn('SET UP SIFT USER', userId);
  }
});
