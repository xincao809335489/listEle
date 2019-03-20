<template>
	<div id="component-is">
		<input type="button" value="A组件" @click="a=aaa">
		<input type="button" value="B组件" @click="a=bbb">
		<!-- 创建动态组件 -->
		<component :is="a"></component>
	</div>
</template>

<script>
	import IsA from './IsA'
	import IsB from './IsB'
	export default{
		name:"component-is",
		data(){
			return {
				a:"aaa"
			}
		},
		methods:{

		}
	}
</script>