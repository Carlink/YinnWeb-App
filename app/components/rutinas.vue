<template>
	<span>
		Rutinas
		<div id="blocklyDiv" style="height: 480px; width: 600px;" ref="toolbox">			
		</div>
	</span>
</template>

<script>

	export default{
		mounted(){
			var workspacePlayground = Blockly.inject('blocklyDiv',
      			{toolbox: '<xml id="toolbox" style="display: none">'+
					  '<block type="controls_if"></block>'+
					  '<block type="controls_repeat_ext"></block>'+
					  '<block type="logic_compare"></block>'+
					  '<block type="math_number"></block>'+
					  '<block type="math_arithmetic"></block>'+
					  '<block type="text"></block>'+
					  '<block type="text_print"></block>'+
					'</xml>'
      				});
		}
	}
</script>

<style scoped>
	
</style>