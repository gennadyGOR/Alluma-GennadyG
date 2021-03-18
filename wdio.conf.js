
exports.config = {

  // "user": "gennady",
  // "pass": "G77xxqxqiDoms7oz49Cs",
  
  runner: "local",
  specs: [
    "specs/*/**.js"
  ],
  suites: {
    "footer" : ["./specs/footer/*.spec.js"],
    "forgotPassword" : ["./specs/forgotPassword/*.spec.js"],
    "forgotUsername" : ["./specs/forgotUsername/*.spec.js"],
    "header" : ["./specs/header/*.spec.js"],
    "homePage" : ["./specs/homePage/*.spec.js"],
  },
  exclude: [],
  maxInstances: 4,

  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        excludeSwitches: ["enable-automation"],
        //args: ["--headless", "--disable-gpu"]
      },
    },
  ],
  
  // capabilities: [{
  //   "os" : "OS X",
  //   "os_version" : "Big Sur",
  //   "browserName" : "Chrome",
  //   "browser_version" : "latest",
  //   "resolution" : "1920x1080",
  //   "browserstack.local" : "false",
  // },
  // {
  //   "os" : "Windows",
  //   "os_version" : "10",
  //   "browserName" : "Firefox",
  //   "browser_version" : "latest",
  //   "resolution" : "1920x1080",
  //   "browserstack.local" : "false",
  // }],
  
  logLevel: "silent",
  bail: 0,
  baseUrl: "http://oxcdemo.alluma.org/",
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["spec",["allure", {outputDir: "allure-results"}]],
  mochaOpts: {
    require: ["@babel/register"],
    ui: "bdd",
    timeout: 60000
  },
  afterTest: function(test, context, { error, result, duration, passed, retries }) {
    if (!passed) {
      browser.takeScreenshot();
    }
  },
}
