/*
---
description:     Quickboxes

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - Quickboxes
...
*/
var Quickboxes=new Class({Implements:[Options],options:{elements:"input[type=checkbox]",mode:"toggle"},initialize:function(a){this.setOptions(a);document.ondragstart=function(){return false;};this.options.elements=$$(this.options.elements);this.manage();},manage:function(){var a=0;this.options.elements.each(function(c){c.addEvents({mousedown:function(d){d.stop();a=1;c.checked=!c.checked;},mouseenter:function(d){if(a===1){c.checked=("toggle"==this.options.mode?!c.checked:"check"==this.options.mode);}}.bind(this),click:function(d){c.checked=!c.checked;a=0;}});var b=$$("label[for="+c.get("id")+"]");if(b.length){b[0].addEvent("click",function(){c.checked=!c.checked;});}}.bind(this));window.addEvent("mouseup",function(){a=0;});}});