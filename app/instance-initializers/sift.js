export function initialize(appInstance) {
  // Support Ember 1.13+
  const owner = appInstance.lookup ? appInstance : appInstance.container;

  const router = owner.lookup('router:main');
  const sift = owner.lookup('service:sift');

  if (sift) {
    router.on('didTransition', function() {
      const applicationRoute = owner.lookup('route:application');

      if (applicationRoute && typeof applicationRoute.siftUser === 'function') {
        applicationRoute.siftUser();
      }
      if (sift.hasUser()) {
        sift.trackSift();
      }
    });
  }
}

export default {
  name: 'sift',
  initialize
};
