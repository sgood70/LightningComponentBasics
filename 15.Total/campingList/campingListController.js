({
    doInit  : function(component, event, helper) {
		helper.retrieve(component, event);
	},

    handleAddItem: function(component, event, helper) {
		helper.modify(component, event, 'Add')	
	},

    handleUpdateItem: function(component, event, helper) {
		helper.modify(component, event, 'Update')	
	}    
})