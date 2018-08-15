<template>
	<div class="page" style="padding-bottom: 60rpx;">
		<video width="800" height="" style="width: 100%;height: 500rpx;">
		</video>
		<div class="detile padding_20 bg-white">
			<div class="name font_16">
				{{detile.name}}
			</div>
			<div class="font_8 js">
				<span>{{detile.time}}</span>
				<span>{{detile.gs}}</span>
				<span>阅读 {{detile.yudl}}</span>
			</div>
		</div>

		<div class="tuij">
			<div class="title bg-white">
				<span class="font_12">相关文章</span>
				<span class="font_8" style="float: right;">更多&gt;</span>
			</div>
			<div class="bg-white padding_20 zxall" style="margin-bottom: 5rpx;" v-for="(zx,index) in zxs" :key='index'>
				<div class="zx">
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
			</div>
		</div>
		<pl></pl>

		<div class="bottom_fc">
			<div class="bb">
				<span><img src="/static/images/home/homeicon_17.jpg"/></span>
				<span class="font_8">分享</span>
			</div>
			<div class="bb">
				<span><img src="/static/images/home/homeicon_14.jpg"/></span>
				<span class="font_8">收藏</span>
			</div>
			<div class="bb">
				<span><img src="/static/images/home/homeicon_14.jpg"/></span>
				<span class="font_8">0</span>
			</div>
			<div class="bb">
				<span><img src="/static/images/home/homeicon_12.jpg"/></span>
				<span class="font_8">0</span>
			</div>
			<div class="bb-bottom">评论</div>
		</div>
	</div>
</template>

<script>
	import bus from '@/utils/bus.js'
	import pl from '@/components/pl'
	export default {
		name: 'zxxx',
		data() {
			return {
				detile: {
					name: '华润集团华润集团华润集团华润集团华润集团',
					time: '2012-12-12',
					gs: '华润集团',
					yudl: '3343434',
					content: '就是这一句：“注意：为了不让用户在使用小程序时造成困扰，我们规定页面路径只能是五层，请尽量避免多层级的交互方式。”数一数我的跳转页面，当然你可以可以看微信开发者工作的预览视图右上角，会出现您当前调试的页面有5个这样的提示。再贴一下我的页面跳转情况：商品展示-- > 商品详情-- > 下单页面-- > 下单详情页面-- > 支付结果页面-- > 跳转订单详情页面。就在最后一步的时候已经跳转不过去了， 此时前面已经使用wx.navigateTo跳转了五个页面， 刚好达到限制。然后我试着在下单页面跳转到下单详情页面的时候换用： wx.redirectTo(）方法跳转， 然后再编译执行， 发现跳转到订单详情页面成功。 然后我把一些不需要返回之后还回到当前页面的跳转换成了wx.redirectTo(）来跳转， 解决了wx.navigateTo跳转不成功的问题。 '
				},

				zxs: [{
						name: '华润集团华润集团华润集团华润集团',
						issp: true,
						time: '2013-13-13',
						chakan: '200',
						zhan: '300',
						video: '',
						images: '/static/images/home_03.jpg'
					},
					{
						name: '华润集团华润集团华润集团华润集团',
						issp: false,
						time: '2013-13-13',
						chakan: '200',
						zhan: '300',
						video: '',
						images: '/static/images/home_03.jpg'
					},
					{
						name: '华润集团华润集团华润集团华润集团',
						issp: true,
						time: '2013-13-13',
						chakan: '200',
						zhan: '300',
						video: '',
						images: '/static/images/home_03.jpg'
					},
				]
			}
		},
		components: {
			pl
		}
	}
</script>

<style scoped="scoped" lang="scss">
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