<template>
	<div id="todo">
		<header class="header">header</header>
		<to-do></to-do>
		<footer class="footer">footer</footer>
		<hr>
		<!-- 自定义轮播图 -->
		<!-- <div class="slide" @museover="stop()" @mouseout="move()">
			<div class="slideshow">
				<transition-group tag='ul' name="image">
					<li 
						v-for="(img,index) in imgArray"
						:key="index"
						v-show="index===mark"
					>
						<a href="#">
							<img :src="img" alt="">
						</a>
					</li>
				</transition-group>
			</div>
			<div class="bar">
				<span 
					v-for="(item,index) in imgArray"
					:key="index"
					@click="change(index)"
					:class="{'active':index===mark}"
				></span>
			</div>
		</div> -->
		<!-- 自定义轮播图 二-->
		
		 <!-- <div id="topBanner" style="padding-top: 5px;" class="slide" >
            <div v-for="(imgUrl, index) in imgArray" v-show="index===mark" :key="index" class="slideshow">
              <a href="#">
                <img :src=imgUrl style="width:100%;height:350px;">
              </a>
            </div>
            <div class="bar">
                 <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }" :key="index"></span>
		 	</div>
		</div> -->

		<!-- 插件轮播图 三-->
		<div class="swiper-container" @mouseenter="mouseenter" @mouseleave="mouseleave">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide">Slide 1</div>
		        <div class="swiper-slide">Slide 2</div>
		        <div class="swiper-slide">Slide 3</div>
		    </div>
		</div>
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->
    
    <!-- 如果需要导航按钮 -->
    <!--<div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    
    <!-- 如果需要滚动条 -->
     <!-- <div class="swiper-scrollbar"></div>-->
</div>
	</div>
</template>

<script>
	import Todo from "@/components/TodoItem"
	export default{
		name:"todo",
		data(){
			return {
				mark:0,//对比图片索引的变量
				timer:null,
				imgArray:[
					require("../assets/01.jpg"),
					require("../assets/02.jpg"),
					require("../assets/03.jpg"),
					require("../assets/04.jpg")
				],
                bannerList:["http://p3.so.qhimgs1.com/t01f3c2fbbfc190da13.jpg","http://p1.so.qhimgs1.com/t01fb8af23fa1c93441.jpg","http://p0.so.qhimgs1.com/t013e7b12d08f155a4c.jpg"],
                swiper:''
			}
		},
		components:{
			'to-do':Todo
		},
		methods:{
			autoPlay(){
				this.mark++;
				if(this.mark===3){
					this.mark=0
				}
			},
			play(){
				setInterval(this.autoPlay,2500)
			},
			change(i){
				this.mark = i;
			},
			mouseenter(){
				console.log("enter")
				this.swiper.autoPlay.stop();
			},
			mouseleave(){
				console.log("leave")
			}
		},
		created (){
			this.play();
		},
		mounted(){
			this.swiper = new Swiper(".swiper-container",{
				direction:"horizontal",
				loop:true,
				autoplay:{
					delay:2000
				}
			})
		}
	}
</script>

<style>
	.swiper-container {
	    width: 600px;
	    height: 300px;
	}  
	*{
		margin:0;
		padding:0;
		list-style: none;
	}
	.header{
		width:100%;
		height:30px;
		text-align: center;
	}
	.footer{
		position: fixed;
		left:0;
		bottom:10px;
		width:100%;
		height:30px;
		text-align: center;
	}
	/*.slide{
		width:600px;
		height:400px;
		margin:0 auto;
		margin-top:50px;
		overflow:hidden;
		position: relative;
	}
	.slideshow{
		width:600px;
		height:400px;
	}
	.slideshow li{
		position: absolute;
	}
	.slideshow li img{
		width:600px;
		height: 400px;
	}
	.bar{
		position: absolute;
		width:100%;
		bottom:10px;
		margin:0 auto;
		z-index:10;
		text-align: center;
	}
	.bar span{
		width:20px;
		height:5px;
		border:1px solid;
		background:white;
		display: inline-block;
		margin-right:10px;
	}
	.bar span.active{
		background-color:red !important;
	}
	/*动画效果*/
	/*.image-enter-active{
		transform:translateX(0);
		transition:all 1.5s ease;
	}
	.image-leave-active{
		transform:transitionX(-100%);
		transition:all 1.5s ease;
	}
	.image-enter{
		transform:translateX(100%);
	}
	.image-leave{
		transform:translateX(0);
	}*/
  .slide {  
    width: 950px;  
    height: 150px;  
    margin: 0 auto;  
    margin-top: 50px;  
    overflow: hidden;  
    position: relative;  
  }  
  .slideshow {  
    width: 950px;  
    height: 150px;  
  }  
  .slideshow li {  
    position: absolute;  
  }  
  img {  
    width: 950px;  
    height: 150px;  
  }  
  .bar {  
    position: absolute;  
    width: 100%;  
    bottom: 10px;  
    margin: 0 auto;  
    z-index: 10;  
    text-align: center;  
  }  
  .bar span {  
    width: 20px;  
    height: 5px;  
    border: 1px solid;  
    background: white;  
    display: inline-block;  
    margin-right: 10px;  
  }  
  .bar span.active {  
    background: #bfd6b6 !important;  
  }   
</style>