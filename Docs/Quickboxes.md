Class: Quickboxes {#Quickboxes}
=========================================

Quickboxes is a MooTools-based class that allows users to click down on a checkbox and drag their mouse over other checkboxes to check or uncheck numerous checkboxes within one click.

### Implements:

Options


Quickboxes Method: constructor {#Quickboxes:constructor}
-------------------------------------------------------------------


### Syntax:

	var myQuickboxes = new Quickboxes(options);

### Arguments:

1. options - (*object*)  Initial options for the class.

### Options:

* elements - (*string*, defaults to 'input[type=checkbox]')  The checkbox elements for which the Quickboxes will be controlled by.
* mode - (*string*, defaults to 'toggle')  The checkbox group's mode ('toggle', 'check', or 'uncheck')

### Returns:

A Quickboxes instance.

