<template>
	<div id="wrap">
		<div class="home-banner">
			<a href="https://www.zhipin.com/"></a>
		</div>
		<div class="home-search">
			<input type="text" placeholder="搜索职位公司">
			<button>搜索</button>
		</div>
		<div id="main">
			<dl v-for="(item,index) in lists">
				<dt>
					<img :src="item.avatar">
					<div class="sub-name">
						<h4>{{item.name}}</h4>
					</div>
				</dt>
				<dd>
					<a href="javascript:void(0)" v-for="(list,index) in item.lists" @click="getDetails(list)">{{list}}</a>
				</dd>
			</dl>
		</div>
		<div class="report-tips-wrap">
			<div class="report-tips">
				<p>违法和不良信息举报邮箱：jubao@kanzhun.com</p>
				<p>企业服务热线和举报投诉：400 065 5799</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name:"bossweb",
		data(){
			return {
				lists:[]
			}
		},
		methods:{
			init(){
				const _this = this;
		    	this.axios.get("https://www.easy-mock.com/mock/5c28cc1bd84c733cb500c5c7/example/bossweb")
		        .then(function(response){
		          _this.lists = response.data.data;
		        })
		        .catch(function(err){ 
		          console.log(err);
		        })
			},
			getDetails(list){
				this.$router.push({path:"/Detail",query:{name:list}})
			}
		},
		created(){
			this.init()
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
		min-height:100%;
		padding-bottom:20px;
	}
	#main{
		position: relative;
	}
	.home-banner{
		width:100%;
		height:196px;
		display:block;
		background:url(../../static/images/home-bg.png) center center no-repeat;
		color:#fff;
		text-align:center;
		background-size:cover;
		a{
			display: block;
		    background: url(../../static/images/home-search-text.png) center 38px no-repeat;
		    -webkit-background-size: 252px auto;
		    height: 138px;
		}
	}
	.home-search{
		position: absolute;
		z-index:10;
		top:138px;
		width:70%;
		margin:0 auto;
		padding-right:70px;
		background:#fff;
		border-radius:30px;
		display: flex;
		margin-left: auto;
		margin-right: auto;
		left:0;
		right:0;
		input{
			width: 100%;
		    height: 37px;
		    line-height: 32px;
		    border-radius: 30px;
		    border: none;
		    font-size: 14px;
		    color: #aeaeae;
		    text-align: left;
		    padding-left: 20px;
		    background: #fff;
		    border-sizing:border-box;
		    outline: none;
		}
		button{
			background-color:#fff;
			color:#5bd4c7;
			font-size:14px;
			position: absolute;
			border:none;
			width:60px;
			right:8px;
			background:0 0;
			height: 100%;
    		outline: 0 none;
		}
	}
	#main dl{
		padding-top:18px;
		padding-bottom:18px;
		border-bottom:1px solid #f5f8f9;
		dt{
			color:#404855;
			font-size:13px;
			overflow:hidden;
			margin:0 15px;
			margin-bottom:18px;
			img{
				width:50px;
				height:50px;
				margin-right:15px;
				vertical-align: middle;
				float:left;
			}
			.sub-name{
				margin:0 48px 0 65px;
				h4{
					font-size:15px;
					margin-top:14px;
					text-align:left;
				}
			}
		}
		dd{
			margin:0 15px;
			color:#525252;
			font-size:18px;
			text-align: left;
			a{
				padding:8px 16px;
				font-size:13px;
				color:#7e8793;
				line-height: 13px;
				background:#f5f8f9;
				border-radius:100px;
				margin:0 8px 8px 0;
				display: inline-block;
				text-decoration:none;
			}
		}
	}
	.report-tips-wrap{
		padding:20px 0;
		text-align:center;
		.report-tips{
			display: inline-block;
			line-height: 18px;
			color:#919aa7;
			font-size:12px;
			text-align:start;
		}
	}
</style>