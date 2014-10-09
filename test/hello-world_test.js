/*global describe,it*/
'use strict';

var expect = require('chai').expect,
  should = require('chai').should();

// jshint
should.should.exists;


describe('Hello World Test', function() {
  it('should work', function() {
    var hello = "world";
    hello.should.exists;
  });
});


