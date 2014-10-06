describe('Backbone.inheritance', function() {
    it('should be present', function() {
        expect(Backbone.inheritance).toBeDefined();
    });

    describe('hashes', function() {
        it('should be an array with events set as default', function() {
            expect(Backbone.inheritance.hashes).toEqual(['events']);
        });
    });
});
