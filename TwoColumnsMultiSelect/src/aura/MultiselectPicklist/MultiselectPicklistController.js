({
	selectValues : function(component, event, helper) {	
		if(component.find("availablePList").get("v.value") == '')
		return;
		var newVal = component.find("availablePList").get("v.value").split(';');
		var res = helper.removeValuesFromList(component.get("v.availablePickList"), newVal);
		component.set("v.availablePickList", res);
		var newSelectedValues = component.get("v.selectedPickList").concat(newVal);
		newSelectedValues = newSelectedValues.filter(function(value, index){ return newSelectedValues.indexOf(value) == index });
		component.set("v.selectedPickList", newSelectedValues.sort());
	},
	
	deselectValues : function(component, event, helper) {
		if(component.find("selectedPList").get("v.value") == '')
		return;
		var newVal = component.find("selectedPList").get("v.value").split(';');
		var res = helper.removeValuesFromList(component.get("v.selectedPickList"), newVal);
		component.set("v.selectedPickList", res);
		var newAvailableValues = component.get("v.availablePickList").concat(newVal);
		newAvailableValues = newAvailableValues.filter(function(value, index){ return newAvailableValues.indexOf(value) == index });
		component.set("v.availablePickList", newAvailableValues.sort());
	},
})