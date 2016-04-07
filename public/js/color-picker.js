$(document).ready(function() {

App = Ember.Application.create();

App.ColorPickerComponent = Ember.Component.extend({
  color: '#000000',

  style: function() {
    return 'background-color:' + this.get('color');
  }.property('color'),

  hexValue: function(key, val) {
    if (arguments.length == 2) {
      if (val.length == 7)
        this.set('color', val);
    }
    return this.get('color');
  }.property('color'),

  rgbR: function() {
    var hex = this.get('hexValue');
    return parseInt(hex.substring(1,3),16);
  }.property('color'),

  rgbG: function() {
    var hex = this.get('hexValue');
    return parseInt(hex.substring(3,5),16);
  }.property('color'),

  rgbB: function() {
    var hex = this.get('hexValue');
    return parseInt(hex.substring(5,7),16);
  }.property('color'),

  rgbToHex: function(n) {
    if (n === null) return "00";
    n = parseInt(n, 10);
    if (n === 0 || isNaN(n)) return "00";
    n = Math.max(0,n);
    n = Math.min(n,255);
    n = Math.round(n);
    return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
  },

  watchRgb: function() {
    var r = this.get('rgbR');
    var g = this.get('rgbG');
    var b = this.get('rgbB');
    var color = '#' + this.rgbToHex(r) + this.rgbToHex(g) + this.rgbToHex(b);
    this.set('color',color);
  }.observes('rgbR','rgbG','rgbB'),

  didInsertElement: function() {
    var _this = this;
    var color = this.get('color');
    $("#color-swatch").spectrum({
      showInput: false,
      allowEmpty: true,
      showButtons: false,
      color: color,
      change: function(newColor) {
        _this.set('color', newColor.toHexString());
      }
    });
  }
});

});
