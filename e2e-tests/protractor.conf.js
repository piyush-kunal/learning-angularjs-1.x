exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'scenarios/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:9090/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
