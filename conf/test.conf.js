const { config: baseConfig } = require('./base.conf.js');

const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      buildName: 'browserstack build',
      // source: 'webdriverio:sample-master:v1.2'
    }
  },
  services: [
    [
      'browserstack',
      // { buildIdentifier: '#${BUILD_NUMBER}' },
    ],
  ],
  capabilities: [
    // {
      //   browserName: 'chrome',
    //   browserVersion: 'latest',
    //   'bstack:options': {
      //     os: 'Windows',
      //     osVersion: '10',
      //   },
      // },
      // {
        //   browserName: 'safari',
        //   browserVersion: 'latest',
        //   'bstack:options': {
          //     os: 'OS X',
          //     osVersion: 'Big Sur',
          //   },
          // },
    //       {
    //   browserName: 'chrome',
    //   'bstack:options': {
    //     deviceName: 'Samsung Galaxy S20',
    //   },
    // },
    {
      browserName: 'safari',
      'bstack:options': {
        deviceName: 'iPhone 13',
        osVersion: '15',
        deviceOrientation: 'portrait',
      }
    }
  ],
};

exports.config = { ...baseConfig, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
});
