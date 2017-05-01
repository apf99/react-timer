var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TimerControls = require('TimerControls');

describe('TimerControls', () => {
  it('should exist', () => {
    expect(TimerControls).toExist();
  });

  describe('render', () => {
    it('should render stop when started', () => {
      var controls = TestUtils.renderIntoDocument(<TimerControls countdownStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $stopButton = $el.find('button:contains(Stop)');

      expect($stopButton.length).toBe(1);
    });
  });

  describe('render', () => {
    it('should render start when stopped', () => {
      var controls = TestUtils.renderIntoDocument(<TimerControls countdownStatus="stopped"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });

  describe('render', () => {
    it('should render start when reset', () => {
      var controls = TestUtils.renderIntoDocument(<TimerControls countdownStatus="reset"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });

});
