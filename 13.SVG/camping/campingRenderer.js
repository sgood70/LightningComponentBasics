({
    render: function(cmp, helper) {
        console.log('render is calling ');
        return this.superRender();
    },
    afterRender: function(cmp, helper) {
        console.log('afterRender is calling '); 
        return this.superAfterRender();
    },
    rerender: function(cmp, helper) {
        console.log('rerender is calling '); 
        return this.superRerender();
    },
    unrender : function (cmp, helper) {
        console.log('unrender is calling '); 
        return this.superUnrender();
    }
})