/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sift',

  contentFor: function (type, config) {
    if (type === 'body-footer') {

      if (!config.sift || !config.sift.SNIPPET_KEY) {
        return '';
      }

      return  'var _sift = window._sift = window._sift || [];' +
              '<script type="text/javascript" src="https://cdn.siftscience.com/s.js"></script>';
    }
  }
};
