module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './scripts/directive/search/search-dir.js',
            './scripts/directive/search/controller/search-controller.js',
            './scripts/directive/search/service/search-svc.js',
            './scripts/directive/report/report-dir.js',
            './scripts/script.js',
            './scripts/controller/site-controller.js',
            './tests/controller/site-controller.spec.js',
            './tests/directive/search/search-controller.spec.js',
            './tests/directive/search/search-svc.spec.js'
        ],
        //C:\Users\yyn6oq\Documents\NetBeansProjects\J2EE_Angular\web\scripts\directive\search\controller\search-controller.js
        exclude: [

        ],
        preprocessors: {
        },
        // reporters: ['progress'],
        reporters: ['spec'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
}