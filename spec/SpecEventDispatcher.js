define(["jasmine", "EventDispatcher"], function (jasmine, __ED__) {
    describe("EventDispatcher", function () {
        var dispatcher;
        var genericEvent = "testEvt";

        beforeEach(function() {
            dispatcher  = new __ED__.EventDispatcher();
        });

        it("should be able to create a new instance", function(){
            expect(dispatcher).not.toBe(undefined);
        });

        it("should be able to add a basic listener without error", function(){
            dispatcher.addEventListener(genericEvent, function(){});
        });

        it("should be able to remove a basic listener without error", function(){
            dispatcher.removeEventListener(genericEvent, function(){});
        });

        it("should be able to check if the dispatcher has a listener", function() {
            var handler = function(e) {};

            dispatcher.addEventListener(genericEvent, handler);

            var result = dispatcher.hasEventListener(genericEvent, handler);
            expect(result).toBe(true);
        });

        it("should call the referenced listener function", function() {
            var result = false;
            var handler = function(e) {
                result = true;
            }

            dispatcher.addEventListener(genericEvent, handler); 
            dispatcher.dispatchEvent(new __ED__.Event(genericEvent, null));

            waitsFor(function() {
                return result;
            });

            expect(result).toBe(true);
        });

        it("should not call a function if listener has been removed", function() {
            var result = false
            // This should never be called
            var handler = function(e) {
                result = true;
            }

            dispatcher.addEventListener(genericEvent, handler);
            dispatcher.removeEventListener(genericEvent, handler);

            // This shouldn't call anything
            dispatcher.dispatchEvent(new __ED__.Event(genericEvent, null));

            waits(50); // This should be enough time for the dispatcher to call the handler

            expect(result).toBe(false);
        });
    });
});