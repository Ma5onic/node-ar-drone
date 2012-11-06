var common              = require('../../common');
var assert              = require('assert');
var test                = require('utest');
var createClientControl = require(common.lib + '/client/createClientControl');
var UdpControl = require(common.lib + '/control/UdpControl');

test('createClientControl', {
  before: function() {
    this.udpControl = new UdpControl();
    this.control = createClientControl({
      udpControl: this.udpControl,
    });
  },

  'constructor': function() {
    assert.equal(this.control.leftRight, 0);
    assert.equal(this.control.frontBack, 0);
    assert.equal(this.control.upDown, 0);
    assert.equal(this.control.clockSpin, 0);
  },

  'toJSON: returns a copy of just the data': function() {
    var json = this.control.toJSON();

    // check one value
    assert.strictEqual(json.leftRight, 0);

    // make sure modifying it does not modify the control
    json.leftRight = 5;
    assert.strictEqual(this.control.leftRight, 0);

    // also make sure functions were not copied
    assert.strictEqual(json.toJSON, undefined);
  },
});
