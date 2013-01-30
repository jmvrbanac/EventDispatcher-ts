/*globals require, jasmine*/

var jasmine_console_reporter;

require(
  [
    'jasmine-html',
    'jasmine-console',
    'jasmine-junit',
    'spec/SpecEventDispatcher'
  ],
function() {
  'use strict';
  jasmine_console_reporter = new jasmine.ConsoleReporter();
  var junitReporter = new jasmine.JUnitXmlReporter("build/junit/");

  jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
  jasmine.getEnv().addReporter(jasmine_console_reporter);
  jasmine.getEnv().addReporter(junitReporter);
  jasmine.getEnv().execute();
});
