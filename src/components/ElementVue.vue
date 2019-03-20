<template>
  <div>
    <el-container>
      <el-header>header</el-header>
      <el-main>main</el-main>
    </el-container>
    <el-container>
		<el-aside width="200px">aside</el-aside>
		<el-main>main</el-main>
    </el-container>
    <el-container>
		<el-header>header</el-header>
		<el-main>main</el-main>
		<el-footer>footer</el-footer>
    </el-container>
    <el-container>
		<el-header>header</el-header>
		<el-container>
			<el-aside width="200px">aside</el-aside>
			<el-main>main</el-main>
		</el-container>
    </el-container>

    <el-container>
		<el-header>header</el-header>
		<el-container>
			<el-aside width="200px">aside</el-aside>
			<el-container>
				<el-main>main</el-main>
				<el-footer>footer</el-footer>
			</el-container>
		</el-container>
    </el-container>
    <el-container>
		<el-aside width="200px">aside</el-aside>
		<el-container>
			<el-header>header</el-header>
			<el-main>main</el-main>
		</el-container>
    </el-container>
    <el-container>
		<el-aside>aside</el-aside>
		<el-container>
			<el-header>header</el-header>
			<el-container>
				<el-main>main</el-main>
				<el-footer>footer</el-footer>
			</el-container>
		</el-container>
    </el-container>
    <hr>
    <p>图标的使用</p>
    <div>
    	<i class="el-icon-edit"></i>
    	<i class="el-icon-share"></i>
    	<i class="el-icon-delete"></i>
    	<el-button type="primary" icon="el-icon-search"></el-button>
    </div>
    <p>button部分</p>
    <el-row>
		<el-button>默认状态</el-button>
		<el-button type="primary">主要按钮</el-button>
		<el-button type="success">成功按钮</el-button>
		<el-button type="info">信息按钮</el-button>
		<el-button type="warning">警告按钮</el-button>
		<el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
		<el-button plain>朴素按钮</el-button>
		<el-button type="primary" plain>主要按钮</el-button>
		<el-button type="success" plain>成功按钮</el-button>
		<el-button type="info" plain>信息按钮</el-button>
		<el-button type="warning" plain>警告按钮</el-button>
		<el-button type="danger" plain>按钮</el-button>
    </el-row>
    <el-row>
		<el-button round>圆角按钮</el-button>
		<el-button type="primary" round>主要按钮</el-button>
		<el-button type="success" round>成功按钮</el-button>
		<el-button type="info" round>信息按钮</el-button>
		<el-button type="warning" round>警告按钮</el-button>
		<el-button type="danger" round>按钮</el-button>
    </el-row>
    <el-row>
		<el-button icon="el-icon-search" circle></el-button>
		<el-button type="primary" icon="el-icon-edit" circle></el-button>
		<el-button type="success" icon="el-icon-check" circle></el-button>
		<el-button type="info" icon="el-icon-message" circle></el-button>
		<el-button type="warning" icon="el-icon-star-off" circle></el-button>
		<el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <p>禁用按钮状态</p>
    <el-row>
		<el-button disabled>默认状态</el-button>
		<el-button type="primary" disabled>主要按钮</el-button>
		<el-button type="success" disabled>成功按钮</el-button>
		<el-button type="info" disabled>信息按钮</el-button>
		<el-button type="warning" disabled>警告按钮</el-button>
		<el-button type="danger" disabled>危险按钮</el-button>
    </el-row>
    <p>没用边框的文字按钮</p>
    <el-button type="text">文字按钮</el-button>
    <el-button type="text" disabled>文字按钮</el-button>
    <p>自定义图标</p>
    <el-button type="primary">上传<i class="el-icon-upload el-icon-right"></i></el-button>
    <p>按钮组</p>
    <el-button-group>
		<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
		<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <p>加载中</p>
    <span>
    	<el-button type="primary" :loading="true">加载中</el-button>
    </span>
    <el-row>
		<el-button>默认按钮</el-button>
		<el-button size="medium">中等按钮</el-button>
		<el-button size="small">小型按钮</el-button>
		<el-button size="mini">超小按钮</el-button>
    </el-row>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <el-checkbox v-model="checked">备选项</el-checkbox>
    <el-checkbox v-model="checked1" disabled>禁用1</el-checkbox>
    <el-checkbox v-model="checked2" disabled>禁用2</el-checkbox>
    <el-checkbox-group v-model="checkArray">
		<el-checkbox label="A"></el-checkbox>
		<el-checkbox label="B"></el-checkbox>
		<el-checkbox label="C"></el-checkbox>
		<el-checkbox label="禁用" disabled></el-checkbox>
		<el-checkbox label="选中禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin:15px 0;">
    	<el-checkbox-group v-model="checkedCities" @change = "handleCheckedCitiesChange" :min="1" :max="2">
			<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    	</el-checkbox-group>
    </div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
     <el-input v-model="input" placeholder="请输入内容" :disabled="true"></el-input>
     <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
     <el-input type="textarea" v-model="input" placeholder="请输入内容" clearable :autosize="{minRows:2,maxRows:4}"></el-input>
     <el-input placeholder="请输入内容" v-model="input">
		<template slot="prepend">.com</template>
     </el-input>
    <div style="margin-top: 15px;">
	  <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
		    <el-select v-model="select" slot="prepend" placeholder="请选择">
		      <el-option label="餐厅名" value="1"></el-option>
		      <el-option label="订单号" value="2"></el-option>
		      <el-option label="用户电话" value="3"></el-option>
		    </el-select>
		    <el-button slot="append" icon="el-icon-search"></el-button>
	  </el-input>
	  <el-row>
		<el-col :span="12">
			<div>列出输入建议</div>
			<el-autocomplete
				v-model="state1"
				:fetch-suggestions="querySearch"
				placeholder="请输入内容"
				@select="handleSelect"
			></el-autocomplete>
		</el-col>
	  </el-row>
	  <div style="margin-top:20px;">
	  	<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
	  	<el-input-number v-model="num2" @change="handleChange" :min="1" :max="10" label="描述文字" :step="2"></el-input-number>
	  </div>
	</div>
	<div class="block">
	  <span class="demonstration">默认 click 触发子菜单</span>
	  <el-cascader
	    :options="options"
	    v-model="selectedOptions"
	    @change="handleOptionsChange"
	    separator="-">
	  </el-cascader>
	</div>
	<div style="margin-top:20px;">
		<el-switch
			v-model="val2"
			active-color="red"
			inactive-color="#000"
			active-text="按月付费"
			inactive-text="按年付费"
		></el-switch>
	</div>
  </div> 
</template>


<script>
	const cityOptions = ["上海","北京","广州","深圳"]
	export default ({
		name:"ele",
		data(){
			return {
			options:[],
			val2:true,
				visible:false,
				num1:1,
				num2:1,
				radio:"1",
				checked:true,
				checked1:true,
				checked2:false,
				checkArray:["A","B","选中禁用"],
				checkAll:false,
				checkedCities:["上海","北京"],
				cities:cityOptions,
				isIndeterminate:true,
				input:"",
				select:"",
				state1:"",
				restaurants:[],
				selectedOptions:[]
			}
		},
		methods:{
			handleChange(val){
				console.log(val)
			},
			handleOptionsChange(val){
				console.log(val)
			},
			handleCheckAllChange(val){
				this.checkedCities = val?cityOptions:[];
				this.isIndeterminate = false
			},
			handleCheckedCitiesChange(val){
				let checkedCount = val.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
				//console.log(this.isIndeterminate)
			},
			querySearch(queryString,cb){
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				cb(results);
			},
			createFilter(queryString) {
		        return (restaurant) => {
		          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
		        };
		    },
		     handleSelect(item) {
		        console.log(item);
		      },
		    loadAll(){
		    	return [
		    		{"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
		    		{"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
		    		{ "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
		          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
		          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
		          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
		          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
		          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
		          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
		          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
		          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
		          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
		    	]
		    },
		    handleChange(val){
		    	console.log(val)
		    },
		    initData(){
		    	const _this = this;
		    	this.axios.get("https://www.easy-mock.com/mock/5c28cc1bd84c733cb500c5c7/example/ChildrenTee")
		        .then(function(response){
		          console.log(response.data.data);
		          _this.options = response.data.data;
		        })
		        .catch(function(err){ 
		          console.log(err);
		        })
		    }
		},
		mounted(){
			this.restaurants = this.loadAll();
			
		},
		created(){
			this.initData()
		}
	})
</script>

<style>
	#app{
		margin-top:0;
	}
	.el-header,.el-footer{
		background-color:#B3C0D1;
		color:#333;
		text-align:center;
		line-height:68px;
	}
	.el-aside{
		background-color:#D3DCE6;
		color:#333;
		text-align:center;
		line-height: 200px;
	}
	.el-main{
		background-color:#E9EEF3;
		color:#333;
		text-align:center;
		line-height: 160px;
	}
	.el-container{
		margin-bottom:40px;
	}
	.el-container:nth-child(5) .el-aside{
		line-height: 260px;
	}
	.el-container .el-container{
		margin:0;
	}
	.el-row{
		margin:20px 0px;
	}
	 .el-select .el-input {
    	width: 130px;
	}
	.input-with-select .el-input-group__prepend {
	    background-color: #fff;
	 }
</style>