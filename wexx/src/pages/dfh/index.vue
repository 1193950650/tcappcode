<template>
	<div class="page">
		<div class="content">
			<div class="weui-panel__bd">
				<div class="weui-media-box weui-media-box_small-appmsg">
					<div class="weui-cells weui-cells_in-small-appmsg">
						<navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
							<div class="weui-cell__bd weui-cell_primary">
								<div class="font_12">我的积分</div>
							</div>
							<div class="weui-cell__ft weui-cell__ft_in-access"></div>
						</navigator>
					</div>
				</div>
			</div>
			<div class="xfui">
					<div class="a">
						<div class="a-a">
							<img src="/static/images/home_03.jpg" alt="" />
						</div>
						<div class="a-b">商品名称商品名称商品名称商品名称</div>
						<div class="a-c">
							￥999.00
						</div>
					</div>
					<div class="b">
						<span class="a-d">我要退款</span>
						<span class="a-e">催促卖家</span>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {

  }
</script>

<style scoped="scoped" lang="scss">
	.xfui{
		background-color: white;
		padding-bottom: 15rpx;
		.a{
			padding: 20rpx;
			display: flex;
			justify-content: space-between;
			.a-a{
				width: 121rpx;
				height: 106rpx;
				margin-right: 10rpx;
				img{
					height: 100%;
					width: 100%;

				}
			}
			.a-b{
				height: 106rpx;
				width: auto;
			}
			.a-c{
				width: 200rpx;
				height: 106rpx;
				line-height: 106rpx;
				color: red;
				font-size: 13pt;
				text-align: center;
			}
		}
		.b{
			display: flex;
			justify-content: flex-end;
			.a-d{
				background-color: #32b16c;
				font-size: 12pt;
				text-align: center;
				color: white;
				height: 65rpx;
				padding-left: 20rpx;
				padding-right: 20rpx;
				line-height: 65rpx;
				margin-right: 50rpx;
			}
			.a-e{
				background-color: #e50150;
				font-size: 12pt;
				text-align: center;
				color: white;
				height: 65rpx;
				padding-left: 20rpx;
				padding-right: 20rpx;
				line-height: 65rpx;
			}
		}
	}
</style>
