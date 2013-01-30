define(["jasmine", "EventDispatcher"], function (jasmine, __ED__) {
    describe("EventDispatcher", function () {
    	var dispatcher;

    	beforeEach(function() {
    		dispatcher  = new __ED__.EventDispatcher();
    	});

    	it("should be able to create a new instance", function(){
    		expect(dispatcher).not.toBe(undefined);
    	});
    });
});