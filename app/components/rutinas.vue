<template>
	<span>
		Rutinas
		<div id="blocklyDiv" style="height: 100%; width: 100%; position: relative;" ref="toolbox">		
		</div>

		<xml style="display: none;" ref="toolbox">
			<category name="Control">
				<block type="controls_if"></block>
				<block type="controls_repeat_ext"></block>
				<block type="logic_compare"></block>
				<block type="math_number"></block>
				<block type="math_arithmetic"></block>
				<block type="text"></block>
				<block type="text_print"></block>
			</category>
		</xml>
	</span>
</template>

<script>

	export default{
		mounted(){

			var workspacePlayground = Blockly.inject('blocklyDiv',
      			{
      			toolbox: this.$refs.toolbox,
				grid:{
         			spacing: 20,
		        	length: 3,
		          	colour: '#ccc',
		          	snap: true},
		        scrollbars: true,
		        trashcan: true,
		             }				
      			);
		}
	}
</script>

<style scoped>
	
</style>