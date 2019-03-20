<template>
	<div>
		<ul class="tabs">
			<li v-for="(list,index) in listsTable" :class="{'active':current===index}" @click="changeList(index)">{{list}}</li>
		</ul>
		 <!-- <div class="layout">
	        <Layout>
	            <Header>
	                <Menu mode="horizontal" theme="dark" active-name="1">
	                    <div class="layout-logo">layout-logo</div>
	                    <div class="layout-nav">
	                        <MenuItem name="1">
	                            <Icon type="ios-navigate"></Icon>
	                            Item 1
	                        </MenuItem>
	                        <MenuItem name="2">
	                            <Icon type="ios-keypad"></Icon>
	                            Item 2
	                        </MenuItem>
	                        <MenuItem name="3">
	                            <Icon type="ios-analytics"></Icon>
	                            Item 3
	                        </MenuItem>
	                        <MenuItem name="4">
	                            <Icon type="ios-paper"></Icon>
	                            Item 4
	                        </MenuItem>
	                    </div>
	                </Menu>
	            </Header>
	            <Content :style="{padding: '0 50px'}">
	                <Breadcrumb :style="{margin: '20px 0'}">
	                    <BreadcrumbItem>Home</BreadcrumbItem>
	                    <BreadcrumbItem>Components</BreadcrumbItem>
	                    <BreadcrumbItem>Layout</BreadcrumbItem>
	                </Breadcrumb>
	                <Card>
	                    <div style="min-height: 200px;">
	                        Content
	                    </div>
	                </Card>
	            </Content>
	            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
	        </Layout>
	    </div> -->
	</div>
</template>

<script>
	export default {
		name:"",
		data(){
			return {
				visible:false,
				current:0
			}
		},
		props:{
			"listsTable":{
				type:Array,
				require:true
			}
		},
		methods:{
			changeList(index){
				this.current = index;
			},
			show(){
				this.visible = true;
			}
		}
	}
</script>

<style lang="less">
	.tabs{
		width:100%;
		li{
			width:100%;
			height:60px;
			line-height:60px;
			text-align: left;
			padding-left:17px;
			box-sizing:border-box;
			color:#aaa;
			&.active{
				background:#f8f8fa;
				color:#4b4b4b;
			}
		}
	}
	/*.layout{
		color:#fff;
	    border: 1px solid #d7dde4;
	    background: #f5f7f9;
	    position: relative;
	    border-radius: 4px;
	    overflow: hidden;
	}
	.layout-logo{
	    width: 100px;
	    height: 30px;
	    background: #5b6270;
	    border-radius: 3px;
	    float: left;
	    position: relative;
	    top: 15px;
	    left: 20px;
	}
	.layout-nav{
	    width: 420px;
	    margin: 0 auto;
	    margin-right: 20px;
	}
	.layout-footer-center{
	    text-align: center;
	}*/
</style>