import config from '../config/environment';

export function initialize() {
  const application = arguments[1] || arguments[0];

  const { sift = {} } = config;
  const { environment = 'development' } = config;
  const siftConfig = { sift, environment };

  application.register('config:sift', siftConfig, { instantiate: false });
  application.inject('service:sift', 'config', 'config:sift')
}

export default {
  name: 'sift',
  initialize: initialize
};
