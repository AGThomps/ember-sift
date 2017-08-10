# Ember Sift

An integration of [siftscience.com](https://siftscience.com/developers/docs/javascript/javascript-api) and emberjs

This README outlines the details of collaborating on this Ember addon.

## Installation

```sh
ember install ember-sift
```

## Configuration/Logging

Add to your enviroment.js file `config.enviroment.js` your sift `JS_SNIPPET_KEY`. There is an option avaliable `LOG_TRACKING` to log sift events by default it is set to false.

```sh
  ENV.sift =  {
    SNIPPET_KEY: '<JS_SNIPPET_KEY>',
    LOG_TRACKING: true
  };
```

