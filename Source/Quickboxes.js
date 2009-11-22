/*
Script: Quickboxes

License: MIT-style license.

Copyright: Copyright (c) 2007-2009 [David Walsh](http://davidwalsh.name/).

Author: David Walsh (http://davidwalsh.name)
*/
var Quickboxes = new Class({

	//implements
	Implements: [Options],

	//options
	options: {
		elements: 'input[type=checkbox]',	//checkboxes to use
		mode: 'toggle'						//toggle|check|uncheck
	},

	//initialization
	initialize: function(options) {
		//set options
		this.setOptions(options);
		//prevent drag start in IE
		document.ondragstart = function () { return false; };
		//ensure that the elements are a Element
		this.options.elements = $$(this.options.elements);
		//manage the checkbox actions
		this.manage();
	},

	//a method that does whatever should be done
	manage: function() {
		var active = 0;
		this.options.elements.each(function(el) {
			el.addEvents({
				'mousedown': function(e) {
					e.stop();
					active = 1;
					el.checked = !el.checked;
				},
				'mouseenter': function(e) {
					if(active === 1) {
						el.checked = ('toggle' == this.options.mode ? !el.checked : 'check' == this.options.mode);
					}
				}.bind(this),
				'click': function(e) {
					el.checked = !el.checked;
					active = 0; 
				}
			});
		}.bind(this));
		var label = $$('label[for=' + el.get('id') + ']');
		if(label.length) {
			label[0].addEvent('click',function() {
				el.checked = !el.checked;
			});
		}
		window.addEvent('mouseup',function() { active = 0; });
	}
});