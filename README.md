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

    Backbone.inheritance.viewOptions = ['events', 'ui', 'triggers', 'modelEvents', 'collectionEvents'];

##### Compatibility

* [Backbone](http://backbonejs.org/)
* [Marionette](http://marionettejs.com/)

##### Changelog
0.1.3

* Moved dependencies from Bower to NPM

0.1.2

* Added version range in bower to use Backbone 1.2.3 as well (issue 5)

0.1.1

* Fixed config.viewOptions
