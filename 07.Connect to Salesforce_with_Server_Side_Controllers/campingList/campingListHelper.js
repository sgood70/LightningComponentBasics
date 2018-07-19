({
	createItem : function(component, Item) {
		var action = component.get("c.saveItem");
		action.setParams({"CampingItem":Item});
		action.setCallback(this, function(response){
			var state = response.getState();
			if(component.isValid() && state === "SUCCESS"){
				console.log('save');
				var campings = component.get("v.items");
				campings.push(Item);
				component.set("v.items",campings);
				component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c','Name': '','Quantity__c': 0,
				'Price__c': 0,'Packed__c': false });				
			}
		});
		$A.enqueueAction(action);
	}
})