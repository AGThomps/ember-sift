/* globals FastBoot */
import Ember from 'ember';
import config from 'ember-get-config';
import { isPresent } from 'ember-utils';

const { sift } = config;

let _sift = window._sift = window._sift || [];

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

  hasUser() {
    return isPresent(this.siftUserId);
  },

  trackSift(userId, sessionId) {
    let siftUserId = userId ? userId : this.siftUserId;
    let siftSessionId = sessionId ? sessionId : this.siftSessionId;
    if(this.hasSift()) {
      _sift.push(['_setAccount', this.siftConfigKey]);
      _sift.push(['_setUserId', siftUserId]);
      _sift.push(['_setSessionId', siftSessionId]);
      _sift.push(['_trackPageview']);
    }

    this.log('trackSift', [this.siftConfigKey, siftUserId, sessionId]);
  },

  siftUser(userId, sessionId) {
    this.siftUserId = userId;
    this.siftSessionId = sessionId;

    this.log('siftUser', arguments);
  },

  log() {
    if(sift && sift.LOG_TRACKING) {
      Ember.Logger.info('[Sift] ', arguments);
    }
  },
});
