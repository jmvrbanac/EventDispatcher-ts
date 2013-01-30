/*globals require*/
'use strict';

// Set the require.js configuration file for your application
require.config({

  baseUrl: './src/',

  deps: ['../main'],
  paths: {
    'jasmine-console':'../tools/jasmine-1.2.0/jasmine.console_reporter',
    'jasmine-junit':'../tools/jasmine-1.2.0/jasmine.junit_reporter',
    'jasmine':      '../tools/jasmine-1.2.0/jasmine.min',
    'jasmine-html': '../tools/jasmine-1.2.0/jasmine-html.min',
    'lib':          '../lib/',
    'jquery':       '../lib/jquery-1.8.1.min',
    'spec':         '../spec/'
  },

  shim: {
    jasmine: {
      deps: ['jquery'],
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine-html'
    },
    'jasmine-console': {
      deps: ['jasmine'],
      exports: 'jasmine-console'
    }, 
    'jasmine-junit': {
      deps: ['jasmine'],
      exports: 'jasmine-junit'
    }
  }

});