/*
Script: Quickboxes

License: MIT-style license.

Copyright: Copyright (c) 2007-2009 [David Walsh](http://davidwalsh.name/).

Author: David Walsh (http://davidwalsh.name)
*/
var Quickboxes=new Class({Implements:[Options],options:{elements:"input[type=checkbox]",mode:"toggle"},initialize:function(a){this.setOptions(a);document.ondragstart=function(){return false;};this.options.elements=$$(this.options.elements);this.manage();},manage:function(){var b=0;this.options.elements.each(function(c){c.addEvents({mousedown:function(d){d.stop();b=1;c.checked=!c.checked;},mouseenter:function(d){if(b===1){c.checked=("toggle"==this.options.mode?!c.checked:"check"==this.options.mode);}}.bind(this),click:function(d){c.checked=!c.checked;b=0;}});}.bind(this));var a=$$("label[for="+el.get("id")+"]");if(a.length){a[0].addEvent("click",function(){el.checked=!el.checked;});}window.addEvent("mouseup",function(){b=0;});}});