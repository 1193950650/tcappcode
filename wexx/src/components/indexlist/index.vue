<template>
	<div class="content">
		<div @click="openurl()">
		<div class="content_height">
			<div class="a"><img src="/static/images/home_03.jpg" /></div>
			<div class="b">
				<p class="username">用户名</p>
				<p class="bq"><span>标签</span></p>
			</div>
		</div>
		<div class="text">
			content..... Font Awesome为您提供可缩放的矢量图标，您可以使用CSS所提供的所有特性对它们进行更改，包括：大小、颜色、阴影或者其它任何支持的效果。
		</div>
		<div class="img">
			<ul>
				<li><img src="/static/images/home_03.jpg" /></li>
				<li><img src="/static/images/home_03.jpg" /></li>
				<li><img src="/static/images/home_03.jpg" /></li>
				<li><img src="/static/images/home_03.jpg" /></li>
			</ul>
		</div>
		<div class="timeandbtn font-s">
			<span class="a">07月02日 09：01</span><span class="b">查看详情</span>
		</div>
		</div>
		<div class="ffooter font-s">
			<span><img class="iconimages s1" src="/static/images/home/homeicon_10.jpg"/><i style="color: #27a2ff;display: inline-block;">8989</i></span>
			<span><img class="iconimages s2" src="/static/images/home/homeicon_12.jpg"/><i style="color: #27a2ff;display: inline-block;">2</i></span>
			<span><img class="iconimages s3" src="/static/images/home/homeicon_14.jpg"/><i style="color: #27a2ff;display: inline-block;">2</i></span>
			<span><img class="iconimages s4" src="/static/images/home/homeicon_17.jpg"/>分享</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'indexlist',
		props: ['props1'],
		data() {

		},

		methods: {
			openurl(){
				wx.navigateTo({
					url:'/pages/indexDetile/main'
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.content {
		box-sizing: border-box;
		width: 100%;
		height: auto;
		background-color: white;
		.content_height {
			padding: 20rpx;
			overflow: hidden;
			height: 100rpx;
			.a,
			.b {
				float: left;
			}
			.a {
				height: 100%;
				width: 100rpx;
				img {
					height: 100%;
					width: 100%;
				}
			}
			.b {
				padding-left: 18rpx;
				.username {
					color: #019aff;
					font-weight: bold;
				}
			}
			.c {
				float: right;
				span {
					color: white;
					padding: 10rpx 20rpx;
					background-color: #e4004d;
					border-radius: 8rpx;
				}
				img {
					height: 28rpx;
					width: 28rpx;
					margin-right: 8rpx;
				}
			}
		}
		.text {
			padding: 20rpx;
			padding-bottom: 5rpx;
		}
		.img {
			padding: 0rpx 20rpx;
			ul {
				display: -webkit-flex;
				/* Safari */
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				li {
					width: 32%;
					overflow: hidden;
					height: 228rpx;
					margin-bottom: 15rpx;
					img {
						height: 100%;
						width: 100%;
					}
				}
			}
		}
		.dzxx {
			padding: 20rpx;
			img {
				height: 35rpx;
				width: 35rpx;
				position: relative;
				top: 6rpx;
				margin-right: 8rpx;
			}
		}
		.timeandbtn {
			padding: 20rpx;
			overflow: hidden;
			.a {
				float: left;
			}
			.b {
				float: right;
			}
		}
		.ffooter {
			height: 70rpx;
			border-top: 1rpx solid #f5f5f5;
			display: -webkit-flex;
			/* Safari */
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 0rpx 20rpx;
			line-height: 70rpx;
			span {}
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
	}
</style>