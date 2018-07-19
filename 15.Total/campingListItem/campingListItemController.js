({
	packItem : function(component, event, helper) {
		var item = component.get("v.item");
		item.Packed__c = true;
		component.set("v.item", item);
		var btn = event.getSource();
		btn.set("v.disabled", true);	
        
        var updateItem = component.getEvent("updateItem");
		updateItem.setParams({"item": item });
		updateItem.fire();
	}
})