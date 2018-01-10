# TwoColumnsMultiSelect
Two columns multiselect picklist lightning component
detailed blog post : http://amitghadage.blogspot.in/2018/01/two-columns-multi-select-picklist.html

1) How to use MultiselectPicklist component.

    <c:MultiselectPicklist availablePickList="['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']"/>
    
2) Use component on visualforce page.

<apex:page >
<apex:includeLightning />
    <div id="multiselectDiv" />
	<script>
	 $Lightning.use("c:TestApp", function() {
	 $Lightning.createComponent("c:MultiselectPicklist",
	 {availablePickList : ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']},
	 'multiselectDiv',
	 function(cmp) {
            console.log('component created successfully')
          });
	});
	</script>
</apex:page>


3) Two columns Multiselect will look like :

  ![alt text](https://github.com/amitghadage/TwoColumnsMultiSelect/blob/master/2ColumnsMultiselectPicklist.png)
