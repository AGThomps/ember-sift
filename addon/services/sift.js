/* globals FastBoot */
import Ember from 'ember';
import config from 'ember-get-config';

const { sift } = config;

export default Ember.Service.extend({
  init() {
    this._super();

    const isFastBoot = typeof FastBoot !== 'undefined';

    if (!this.hasSift() && (this.config && this.config.environment !== 'test') && !isFastBoot) {
      Ember.Logger.warn('Siftscience is not loaded yet (window._sift)');
    }
  },

  siftUserId: null,
  siftConfigKey: sift.SNIPPET_KEY,

  hasSift() {
    return !!(window._sift && typeof window._sift === "object");
  },

  trackSift(userId, sessionId) {
    let siftUserId = userId ? userId : this.siftUserId;
    let _sift = window._sift = window._sift || [];
    if(this.hasSift) {
      _sift.push(['_setAccount', this.siftConfigKey]);
      _sift.push(['_setUserId', siftUserId]);
      _sift.push(['_setSessionId', 'sessionId']);
      _sift.push(['_trackPageview']);
    }

    this.log('trackSift', [this.siftConfigKey, siftUserId, sessionId]);
  },

  siftUser(userId) {
    this.siftUserId = userId;

    this.log('siftUser', arguments);
  },

  log() {
    if(sift && sift.LOG_TRACKING) {
      Ember.Logger.info('[Sift] ', arguments);
    }
  },
});
