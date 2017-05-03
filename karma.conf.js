module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'app/js/main.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'tests/unit/**/*.js'
        ],
        autoWatch: true,
        frameworks: ['jasmine', 'browserify'],
        browsers: ['PhantomJS'],
        colors: true,
        logLevel: config.LOG_DISABLE,
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-browserify',
            'karma-coverage',
            'karma-phantomjs-launcher'
        ],
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'app/js/**/*.js': ['browserify', 'coverage']
        },
        coverageReporter: {
            dir: "./coverage",
            reporters: [
                {type: 'text-summary'},
                {type: 'lcov', subdir: './'}
            ]
        },
        browserify: {
            debug: true,
            extensions: [".js"],
            transform: ['browserify-istanbul']
        },
        phantomjsLauncher: {
            exitOnResourceError: true
        }
    });
};
