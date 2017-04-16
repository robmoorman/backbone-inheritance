describe('Backbone.View', function() {
    var BaseView = Backbone.View.extend({
        events: {
            'foo': 'render'
        }
    });

    it('should merge the property events', function() {
        var ExtendedView = BaseView.extend({
            events: {
                'bar': 'render'
            }
        });

        var view = new ExtendedView();

        expect(view.events['foo']).toBeDefined();
        expect(view.events['bar']).toBeDefined();
    });

    it('should merge the property events over multiple parents', function() {
        var ExtendedBaseView = BaseView.extend({
            events: {
                'bar': 'render'
            }
        });

        var ExtendedView = ExtendedBaseView.extend({
            events: {
                'biz': 'render'
            }
        });

        var view = new ExtendedView();

        expect(view.events['foo']).toBeDefined();
        expect(view.events['bar']).toBeDefined();
        expect(view.events['biz']).toBeDefined();
    });

    it('should override the merged property events', function() {
        var ExtendedView = BaseView.extend({
            events: {
                'foo': 'remove',
                'bar': 'render'
            }
        });

        var view = new ExtendedView();

        expect(view.events['foo']).toEqual('remove');
        expect(view.events['bar']).toBeDefined();
    });

    it('should also merge user defined properties', function() {
        Backbone.inheritance.hashes = ['ui'];

        var ExtendedBaseView = BaseView.extend({
            ui: {
                'foo': 'button'
            }
        });

        var ExtendedView = ExtendedBaseView.extend({
            ui: {
                'bar': 'button'
            }
        });

        var view = new ExtendedView();

        expect(view.ui['foo']).toBeDefined();
        expect(view.ui['bar']).toBeDefined();
    });
});
