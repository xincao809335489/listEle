<template>
	<div id="item">
		<input type="text" 
		placeholder="接下来要做什么？"
		@keyup.enter="addItem"
		id="text"
		>
		<ul class="lists">
			<li v-for="(list,index) in liststab" :key="index">
			<span>
				<input type="checkbox" id="check" @click="selectBtn(list)" ref="content" v-model="list.state">
				<label for="check" :class="{'active':list.state}">{{list.content}}</label>
			</span>
			<span @click="delList(index)">&times;</span>
			</li>
		</ul>
		<div class="footer-item">
			<span>{{unFinishedListLength}} items left</span>
			<p>
				<span 
					v-for="(tab,index) in tabs"
					@click="clickTab(index,tab)"
					:class="{selectActive:index===current}"
				>{{tab}}</span>
			</p>
			<span @click="clearAllCompleted">Clear Completed</span>
		</div>
	</div>
</template>

<script>
	var id =0;
	export default{
		name:"item",
		data(){
			return {
				lists:[],
				tabs:["all","active","completed"],
				current:0,
				currentTab:"all"
			}
		},
		methods:{
			addItem(e){
				if(e.target.value === ""){return}
				this.lists.unshift({
					id:id++,
					content:e.target.value.trim(),
					state:false
				});
				e.target.value = ""
			},
			selectBtn(list){
				list.state = !list.state;
			},
			clickTab(index,tab){
				this.current = index;
				this.currentTab = tab;
			},
			clearAllCompleted(){
				this.lists = this.lists.filter(list=>!list.state)
			},
			delList(index){
				this.lists.splice(index,1)
			}
		},
		computed:{
			liststab(){
				if(this.currentTab === "all"){
					return this.lists
				}
				const completed = this.currentTab === "completed"
				return this.lists.filter(list=>completed === list.state)
			},
			unFinishedListLength(){
				return this.lists.filter(list => !list.state).length
			}
		}
	}
</script>

<style>
	#text{
		width:100%;
		height:50px;
		line-height: 50px;
		border:0 none;
		outline:0 none;
		border:1px solid #dcdcdc;
		padding-left:20px;
		font-size:20px;
	}
	.lists{
		width:100%;
		list-style-type: none;
		padding:0 20px;
		box-sizing:border-box;
	}
	.lists li{
		width:100%;
		display: flex;
		justify-content:space-between;
		font-size:20px;
	}
	.footer-item{
		width:100%;
		border-top:1px solid #ddd;
		display: flex;
		justify-content:space-between;
		padding:10px 0;
	}
	.footer-item p{
		margin:0;
	}
	.footer-item p span{
		margin:0 5px;
	}
	label{
		color:#ccc;
	}
	label.active{
		text-decoration:line-through;
	}
	.selectActive{
		border:1px solid #000;
		padding:3px;
	}
</style>