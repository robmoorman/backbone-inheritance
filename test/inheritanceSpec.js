describe('Backbone.inheritance', function() {
    it('should be present', function() {
        expect(Backbone.inheritance).toBeDefined();
    });

    describe('viewOptions', function() {
        it('should be an array with events set as default', function() {
            expect(Backbone.inheritance.viewOptions).toEqual(['events']);
        });
    });
});
