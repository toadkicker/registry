var Registry = require('../../lib/registry.js');
var _ = require('lodash');
var expect = require('chai').expect;
var http = require('http');
var ddocs = require('../../couchapp/ddocs.js');
var mocks = require('../support/couch-mocks');


describe('Registry', function() {

  'use strict';

  var opts = require('../../config/testing.json');
  var registry = new Registry(opts);
  mocks(registry.url(), opts, ddocs);

  describe('Constructor', function() {

    describe("makes a registry object", function() {
      it('should instanciate and create properties', function() {
        expect(registry).to.be.an.instanceof(Registry);
        expect(registry).to.have.ownProperty('couch');
      });
      it('should inherit prototype methods', function() {
        expect(registry).to.have.property('get');
        expect(registry).to.have.property('show');
        expect(registry).to.have.property('list');
        expect(registry).to.have.property('attachment');
        expect(registry.attachment).to.have.property('insert');
        expect(registry.attachment).to.have.property('get');
      });
      it('should resolve', function(done) {
        registry.promise.then(done);
      });
    });

  });



});
