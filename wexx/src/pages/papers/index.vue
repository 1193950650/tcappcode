<template>
	<div class="page__bd">
		<!--
        	作者：1193950650@qq.com
        	时间：2018-08-11
        	描述：首页上方切换条。
        -->
		<div class="weui-tab bg-white">
			<div class="weui-navbar">
				<block v-for="(item,index) in tabs" :key="index">
					<div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
						<div class="weui-navbar__title">{{item}}</div>
					</div>
				</block>
				<div class="weui-navbar__slider" :class="navbarSliderClass"></div>
			</div>
			<div class="weui-tab__panel">
				<div class="weui-tab__content" :hidden="activeIndex != 0">

				</div>
				<div class="weui-tab__content" :hidden="activeIndex != 1">
					<list-v></list-v>
				</div>
				<div class="weui-tab__content" :hidden="activeIndex != 2">
					<list-v></list-v>
				</div>
			</div>
		</div>
		<!--
        	作者：1193950650@qq.com
        	时间：2018-08-11
        	描述：轮播图
        -->
		<div class="page__bd page__bd_spacing margin_bottom_20" style="padding: 0rpx;height: 400rpx;">
			<swiper class='swiper' :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">

				<swiper-item v-for="(item, index) in imgUrls" :key="index">
					<img :src="item.imgurl" alt="" mode='heightFix' style="width: 100%;" />
				</swiper-item>
			</swiper>
		</div>

		<!--
        	作者：1193950650@qq.com
        	时间：2018-08-11
        	描述：资讯列表
        -->
		<div class="bg-white padding_20 zxall" style="margin-bottom: 5rpx;" v-for="(zx,index) in zxs" :key='index'>
			<div class="zx" v-if='!zx.issp' @click="openurlzx()">
				<div class="a font_14 fontblod">
					<div class="name">{{zx.name}}</div>
					<div class="ffooter font-s">
						<span>{{zx.time}}</span>
						<span><img class="iconimages s1" src="/static/images/home/homeicon_10.jpg"/><i style="color: #27a2ff;display: inline-block;">{{zx.chakan}}</i></span>
						<span><img class="iconimages s3" src="/static/images/home/homeicon_14.jpg"/><i style="color: #27a2ff;display: inline-block;">{{zx.zhan}}</i></span>
					</div>
				</div>
				<div class="b">
					<img :src="zx.images" alt="" />
				</div>
			</div>
			<div class="sp" v-if='zx.issp' @click="openurlsp()">
				<div class="aa font_14 fontblod">{{zx.name}}</div>
				<video width="100%" height="100%" :src="zx.video" style="width: 100%;height: 400rpx;"></video>
				<div class="ffooter font-s">
						<span>{{zx.time}}</span>
						<span><img class="iconimages s1" src="/static/images/home/homeicon_10.jpg"/><i style="color: #27a2ff;display: inline-block;">{{zx.chakan}}</i></span>

						<span><img class="iconimages s3" src="/static/images/home/homeicon_14.jpg"/><i style="color: #27a2ff;display: inline-block;">{{zx.zhan}}</i></span>
			
					</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'papers',
		data() {
			return {
				tabs: ['选项一', '选项二', '选项三'],
				activeIndex: 0,
				fontSize: 30,
				navbarSliderClass: 'weui-navbar__slider_0',

				indicatorDots: true,
				autoplay: false,
				interval: 5000,
				duration: 500,
				circular: false,
				imgUrls: [{
					imgurl: '/static/images/testswiper_02.jpg'
				}, {
					imgurl: '/static/images/testswiper_02.jpg'
				}, {
					imgurl: '/static/images/testswiper_02.jpg'
				}],
				
				
				zxs:[
					{
						name:'资讯资讯资讯资讯资讯资讯',
						issp:true,
						time:'2013-13-13',
						chakan:'200',
						zhan:'300',
						video:'',
						images:'/static/images/home_03.jpg'
					},
										{
						name:'资讯tes资讯资讯资讯资讯资讯t',
						issp:false,
						time:'2013-13-13',
						chakan:'200',
						zhan:'300',
						video:'',
						images:'/static/images/home_03.jpg'
					},
										{
						name:'资讯资讯资讯资讯资讯资讯test',
						issp:true,
						time:'2013-13-13',
						chakan:'200',
						zhan:'300',
						video:'',
						images:'/static/images/home_03.jpg'
					},
				]

			}
		},
		methods: {
			openurlzx(){
				wx.navigateTo({
					url:'/pages/zxdetile/main'
				})
			},
			openurlsp(){
				wx.navigateTo({
					url:'/pages/zxdetilesp/main'
				})				
			},
			navbarSliderClass1() {
				if(this.activeIndex == 0) {
					this.navbarSliderClass = 'weui-navbar__slider_0'
				}
				if(this.activeIndex == 1) {
					this.navbarSliderClass = 'weui-navbar__slider_1'
				}
				if(this.activeIndex == 2) {
					this.navbarSliderClass = 'weui-navbar__slider_2'
				}
			},
			tabClick(e) {
				this.activeIndex = e.currentTarget.id;
				this.navbarSliderClass1();
			},
		},
		onShow() {
			this.navbarSliderClass1();
		}

	}
</script>

<style scoped="scoped" lang='scss'>
	.weui-navbar__slider_0 {
		left: 29rpx;
		transform: translateX(0);
	}
	
	.weui-navbar__slider_1 {
		left: 29rpx;
		transform: translateX(250rpx);
	}
	
	.weui-navbar__slider_2 {
		left: 29rpx;
		transform: translateX(500rpx);
	}
	
	.ffooter {
		height: 70rpx;
		//border-top: 1rpx solid #f5f5f5;
		display: -webkit-flex;
		/* Safari */
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		//padding: 0rpx 20rpx;
		line-height: 70rpx;
		span {
			margin-right: 20rpx;
		}
		.iconimages {
			position: relative;
			top: 6rpx;
			margin-right: 8rpx;
		}
		.s1 {
			height: 35rpx;
			width: 40rpx;
		}
		.s2 {
			height: 35rpx;
			width: 34rpx;
		}
		.s3 {
			height: 35rpx;
			width: 37rpx;
		}
		.s4 {
			height: 31rpx;
			width: 36rpx;
		}
	}
</style>