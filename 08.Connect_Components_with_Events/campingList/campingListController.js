({

    handleAddItem: function(component, event, helper) {
		var item = event.getParam("item");
		var action = component.get("c.saveItem");
		action.setParams({"CampingItem":item});
		action.setCallback(this, function(response){
			var state = response.getState();
			if(component.isValid() && state === "SUCCESS"){
				console.log('save');
				var campings = component.get("v.items");
				campings.push(item);
				component.set("v.items",campings);
			}
		});
		$A.enqueueAction(action);		
		
	},
    
    doInit  : function(component, event, helper) {
		var action = component.get("c.getItems");
        action.setCallback(this, function(response){
        	var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
	},    
})