var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
      expect(Timer).toExist;

  describe('handleControlTimer', () => {

    it('should start timer on started status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        expect(timer.state.timerStatus).toBe('started')
        done();
      }, 3001);
    });

    it('should stop timer on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.state.count = 3;
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        expect(timer.state.timerStatus).toBe('stopped')
        done();
      }, 1001);
    });

    it('should reset count on reset status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.state.count = 3;
      timer.handleStatusChange('reset');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped')
        done();
      }, 1001);
    });

  });



  });
});
