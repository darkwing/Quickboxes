Quickboxes
=========

Quickboxes is a MooTools-based class that allows users to click down on a checkbox and drag their mouse over other checkboxes to check or uncheck numerous checkboxes within one click.

![Screenshot](http://davidwalsh.name/dw-content/quickboxes.png)

How to Use
----------

Quickboxes can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  There are no required arguments -- only options.
	
### HTML
	<input type="checkbox" name="checkboxes[]" class="unchecked" checked="checked" id="unchecked1" /> <label for="unchecked1">Item 1</label><br />
	<input type="checkbox" name="checkboxes[]" class="unchecked" checked="checked" id="unchecked2" /> <label for="unchecked2">Item 2</label><br />
	<input type="checkbox" name="checkboxes[]" class="unchecked" checked="checked" id="unchecked3" /> <label for="unchecked3">Item 3</label><br />
	<input type="checkbox" name="checkboxes[]" class="unchecked" checked="checked" id="unchecked4" /> <label for="unchecked4">Item 4</label><br />
	<input type="checkbox" name="checkboxes[]" class="unchecked" checked="checked" id="unchecked5" /> <label for="unchecked5">Item 5</label><br />
	<input type="checkbox" name="checkboxes[]" class="unchecked" checked="checked" id="unchecked6" /> <label for="unchecked6">Item 6</label><br />
	
	
### Javascript
	var unchecked = new dwCheckboxes({ 
		elements: $$('.unchecked'), 
		mode: 'uncheck' 
	});

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/quickboxes](http://davidwalsh.name/js/quickboxes)