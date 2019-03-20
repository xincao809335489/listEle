<template>
	<div id="wrap">
		<div id="header">
			<div class="search-bar">
				<a href="javascript:void(0)" class="icon-home" @click="goBack">
					<img src="https://static.zhipin.com/zhipin/v128/h5/wap/images/icon-home.png" alt="">
				</a>
				<p>
					<span class="city-text">北京</span>
					<input type="text" placeholder="搜索职位" :value="val">
					<button class="icon-close" @click="clear"></button>
				</p>
				<button class="btn-search">搜索</button>
			</div>
			<div class="filter-bar">
				<ul class='filter_ul'>
					<li v-for="(tab,index) in tabs" @click="showLists(tab,index)" class="tab_li">{{tab}}</li>
				</ul>
				<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
					<el-lists v-show="show" :listsTable="listsTable"></el-lists>
				</transition>
			</div>
		</div>
		<div id="main">
			<ul class="lists">
				<li v-for="(list,index) in listsData" :key="index">
					<img :src="list.img" alt="">
					<div class="lists_right">
						<div class="list_title">
							<h4>{{list.name}}</h4>
							<p class="list_paraphy">{{list.title}}</p>
							<p class="list_address">
								<span>{{list.address}}</span>
								<span>{{list.education}}</span>
								<span>{{list.year}}</span></p>
						</div>
						<div class="list_salary">{{list.Salary}}</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Lists from '@/components/lists'
	export default({
		data(){
			return {
				show:false,
				lastIndex:'',
				val:'',
				tabs:["经验","学历","薪资","规模","融资"],
				listsTable:[],
				listsData:[]
			}
		},
		components:{
			'el-lists':Lists
		},
		methods:{
			init(){
				console.log(this.$route.query.name);
				this.val=this.$route.query.name;
			},
			goBack(){
				this.$router.push("/bossWeb")
			},
			clear(){
				this.val=""
			},
			showLists(tab,index){
				this.lastIndex =index;
				this.show = true;
				if(tab==="经验"){
					this.listsTable = ["不限","应届生","1年以内","1-3年","3-5年","5-10年","10年以上"]
				}else if(tab === "学历"){
					this.listsTable = ["不限","初中及以下","中专/中技","高中","大专","本科","硕士"]
				}else if(tab === "薪资"){
					this.listsTable = ["不限","3k以下","3-5k","5-10k","10-15k","15-20k","20-30k","30-50k"]
				}else if(tab === "规模"){
					this.listsTable = ["不限","0-20人","20-99人","100-499人","500-999人","1000-9999人","10000人以上"]
				}else{
					this.listsTable = ["不限","未融资","天使轮","A轮","B轮","C轮","D轮及以上","已上市","不需要融资"]
				}
			},
			listsShow(){
				const _this = this;
				if(this.val=="Java"){
					this.axios.get("https://www.easy-mock.com/mock/5c28cc1bd84c733cb500c5c7/example/Java")
			        .then(function(response){
			          _this.listsData = response.data.data;
			          console.log( _this.listsData) 
			        })
			        .catch(function(err){ 
			          console.log(err);
			        })
				}else if(this.val=="PHP"){
					this.axios.get("https://www.easy-mock.com/mock/5c28cc1bd84c733cb500c5c7/example/PHP")
			        .then(function(response){
			          _this.listsData = response.data.data;
			          console.log( _this.listsData) 
			        })
			        .catch(function(err){ 
			          console.log(err);
			        })
				}
			}
		},
		mounted(){
			this.init(),
			this.listsShow()
		}
	})
</script>

<style lang="less">
	*{
		margin:0;
		padding:0;
	}
	#wrap{
		position:relative;
		#header{
			width:100%;
			background:#fff;
			position: relative;
			.search-bar{
				width:90%;
				height:55px;
				margin:0 auto;
				display: flex;
				align-items:center;
				position:relative;
				.icon-home{
					width:20px;
					height:20px;
					text-align: center;
					line-height: 20px;
					display: inline-block;
					margin-right:10px;
					img{
						width:18px;
						height:18px;
					}
				}
				p{
					width:252px;
					height:27px;
					padding: 5px 13px 5px 12px;
					display:flex;
					align-items:center;
					background:#f4f7f9;
					color:#8b96a6;
					font-size:14px;
					border-radius:16px;
					.city-text{
						width:182px;
						text-align: left;
						border-right:1px solid #ccc;
						&:after{
							content: "";
						    display: inline-block;
						    width: 3px;
						    height: 3px;
						    border-left: solid 1px #797979;
						    border-top: solid 1px #797979;
						    -webkit-transform: rotate(-135deg);
						    position: relative;
						    top: -3px;
						    left: 9px;
						    right: 35px;
						    left: 6px;
						};
					}
					input{
						border:0 none;
						outline:none;
						background:#f4f7f9;
						color:#8b96a6;
						padding-left:8px;
						font-size: 14px;
					}
					.icon-close{
						width:23px;
						height:23px;
						outline: none;
						border:0 none;
						position: relative;
						background: #f4f7f9;
						right:11px;
						&:before{
							content: '';
						    position: absolute;
						    width: 14px;
						    height: 1px;
						    background: #bbc5cc;
						    transform: rotate(45deg);
						    left: 5px;
						    top: 11px;
						}
						&:after{
							content: '';
						    position: absolute;
						    width: 14px;
						    height: 1px;
						    background: #bbc5cc;
						    left: 5px;
						    top: 11px;
						    transform: rotate(-45deg);
						};
					}
				}
				.btn-search{
					color:#5dd5ca;
					background:0 0;
					font-size:15px;
					outline: none;
					border:0 none;
					position: absolute;
    				right: 0;
				}

			}
		}
		.filter-bar{
    		.filter_ul{
    			display: flex;
    			height:37px;
    			line-height: 37px;
    			list-style: none;
				border-top: solid 1px #ebebeb;
    			border-bottom: solid 1px #ebebeb;
    			.tab_li{
    				flex:1;
    				text-align: center;
    				box-sizing:border-box;
    				font-size:12px;
    				text-indent: -5px;
    				color:#aaa;
    				&:after{
    					content:"";
    					display:inline-block;
    					width:4px;
    					height:4px;
    					border-left: solid 1px #797979;
    					border-top: solid 1px #797979;
    					position: relative;
    					top:-3px;
    					left:5px;
    					transtion:all .3s ease 0s;
    					-webkit-transform: rotate(-135deg);
    				};
    			}
    		}
		}
		#main{
			.lists{
				width:100%;
				list-style: none;
				padding:16px;
				padding-top:0;
				li{
					width:100%;
					display: flex;
					padding:15px 0;
					vertical-align: middle;
					border-bottom:1px solid #ccc;
					img{
						width:59px;
						height:59px;
						margin-right:16px;
					}
					.lists_right{
						display: flex;
						justify-content: space-between;
						width:250px;
						font-size:15px;
						color: #414a60;
						.list_title{
							text-align: left;
							.list_paraphy{
								font-size:12px;
								color: #414a60;
								margin:2px 0px;
							}
							.list_address{
								font-size:12px;
								color:#8892ac;
								span{
									margin-right:14px;
								}
							}
						}
						.list_salary{
							font-size: 20px;
							color:red;
							vertical-align: top;
						}
					}
				}
			}
		}
	}
</style>