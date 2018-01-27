/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sift',

  contentFor: function (type, config) {
    if (type === 'body-footer') {

      if (!config.sift || !config.sift.SNIPPET_KEY) {
        return '';
      }

      return  '<script type="text/javascript" src="https://cdn.siftscience.com/s.js" defer async></script>';
    }
  }
};
