# Backbone extended View inheritance

[![Build Status](https://travis-ci.org/robmoorman/backbone-inheritance.svg)](http://travis-ci.org/robmoorman/backbone-inheritance)

##### Usage

Load this script after backbone.js is loaded, nothing' more (AMD is also
supported)!

    var BaseView = Backbone.View.extend({
        events: {
            'click a': 'handleLinkClick'
        }
    });
    
    var ExtendedView = BaseView.extend({
        events: {
            'focus input': 'handleInputFocus'
        }
    });
    
    // view.events now returns
    // {
    //     'click a': 'handleLinkClick',
    //     'focus input': 'handleInputFocus'
    // }
    var view = new ExtendedView();

By default `events` is merged from parents. You can also specify your own
properties (eg. for Marionette):

    Backbone.inheritance.hashes = ['events', 'ui', 'triggers', 'modelEvents', 'collectionEvents'];

##### Compatibility

* [Backbone](http://backbonejs.org/)
* [Marionette](http://marionettejs.com/)
