
describe("Camping List Test", function(){
    afterEach(function() {
        // Each spec (test) renders its components into the same div,
        // so we need to clear that div out at the end of each spec.
        $T.clearRenderedTestComponents();
    });

    describe('c:campingList retrieve', function(){
        it('Camping List Well Retrieved', function(done) {
            $T.createComponent("c:campingList", {}, true)
            .then(function(component) {
                expect(component.get("v.items").length).toBe(0);
                done();
            }).catch(function(e) {
                done.fail(e);
            });
        });
    });

    describe('c:campingList insert', function(){
        it('Camping Create New Item', function(done) {

            $T.createComponent("c:campingListForm", {}, true)
            .then(function(component) {
                var cmpEvent = component.getEvent("addItem");
                cmpEvent.setParam({"item":{"Name":"Son","Price__c":99,"Packed__c":false,"sobjectType":"Camping_Item__c"}});
                cmpEvent.fire();

                //$T.fireApplicationEvent("c:addItemEvent",{"item":{"Name":"Son","Price__c":99,"Packed__c":false,"sobjectType":"Camping_Item__c"}});
                done();
            }).catch(function(e) {
                // end this spec as a failure
                done.fail(e);
            });
        });
    });
    
});