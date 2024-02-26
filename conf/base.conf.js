exports.config = {
  user: "sekarmanoj_XeuqF4",
  key: "ceKAXjhwv15aHzPBm6pE",

  updateJob: false,
  specs: [
    // './tests/specs/mobileUpload.android.push.js',
    // "./tests/specs/mobileUpload.test.js",
    "./tests/specs/local_test.js",

  ],
  exclude: [],

  logLevel: "warn",
  coloredLogs: true,
  UIFileSharingEnabled :true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  hostname: "hub.browserstack.com",
  services: [["browserstack"]],

  before: function () {
    var chai = require("chai");
    global.expect = chai.expect;
    chai.Should();
  },
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
