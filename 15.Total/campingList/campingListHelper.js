({
    retrieve  : function(component, event) {
		var action = component.get("c.getItems");
        action.setCallback(this, function(response){
        	var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
	},

    modify : function(component, event, which) {
		var item = event.getParam("item");
		var action = component.get("c.saveItem");
		action.setParams({"CampingItem":item});
		action.setCallback(this, function(response){
			var state = response.getState();
			if(component.isValid() && state === "SUCCESS"){
                if(which === "Add"){
                    var campings = component.get("v.items");
                    campings.push(response.getReturnValue());
                    component.set("v.items",campings);
                }
            } else if (state === "ERROR"){
                var errors = response.getError(); 
                if (errors) { 
                    if (errors[0] && errors[0].message) { 
                        console.log("Error message: " + errors[0].message); 
                    } 
                } else { 
                    console.log("Unknown error"); 
                }
            } else {
                console.log("Someing Wrong : " + state);
            }
		});
		$A.enqueueAction(action);
	}, 
})