<template>
	<div class="page" style="padding-bottom: 20rpx;">
		<div class="user">
			<div class="a">
				<span>
					<img :src="userinfo.avatarUrl" />
				</span>
			</div>
			<div class="b">
				{{userinfo.nickName}}
			</div>
		</div>

		<div class="zxsp">
			<p class="zxsp-a">
				<span>最新商品</span>
			</p>
			<div class="zxsp-b">
				<div class="opui">
					<navigator open-type='navigate' url='/pages/dfk/main'>
					<img src="/static/mine/iocns_06.jpg"/>
					<span>待付款</span>
					</navigator>
				</div>
				<div class="opui">
					<navigator open-type='navigate' url='/pages/dfh/main'>
					<img src="/static/mine/iocns_08.jpg"/>
					<span>待发货</span>
					</navigator>
				</div>
				<div class="opui">
					<navigator open-type='navigate' url='/pages/dsh/main'>
					<img src="/static/mine/iocns_10.jpg"/>
					<span>待收货</span>
					</navigator>
				</div>
				<div class="opui">
					<navigator open-type='navigate' url='/pages/ywc/main'>
					<img src="/static/mine/iocns_12.jpg"/>
					<span>已完成</span>
					</navigator>
				</div>
				<div class="opui1">
					<navigator open-type='navigate' url='/pages/tksh/main'>
					<img src="/static/mine/iocns_03.jpg"/>
					<span>退款/售后</span>
					</navigator>
				</div>
			</div>
		</div>

        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells weui-cells_in-small-appmsg">
              <navigator url="/pages/myjifen/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd weui-cell_primary">
                  <div class="font_12">我的积分</div>
                </div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
              </navigator>
              <navigator url="/pages/shdz/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd weui-cell_primary">
                  <div class="font_12">收货地址</div>
                </div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
              </navigator>
              <navigator url="/pages/myfabu/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd weui-cell_primary">
                  <div class="font_12">我的发布</div>
                </div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
              </navigator>
              <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd weui-cell_primary">
                  <div class="font_12">小程序开发</div>
                </div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
              </navigator>
            </div>
          </div>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'mine',
		data() {
			return {
				userinfo: ''
			}
		},
		onShow() {
			let userinfo = wx.getStorageSync('userinfo');
			this.userinfo = JSON.parse(userinfo);
			console.log(this.userinfo);
		}
	}
</script>

<style>

</style>
