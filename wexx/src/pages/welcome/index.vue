<template>
	<div>
		<img src="" alt="" />
		<button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">用户授权登录</button>
	</div>
</template>

<script>
	export default {
		methods: {
			bindGetUserInfo(e) {
				// console.log(e.mp.detail.rawData)
				if(e.mp.detail.rawData) {
					//用户按了允许授权按钮
					let userinfo = e.mp.detail.rawData
					wx.setStorageSync('userinfo', userinfo);
					setTimeout(()=>{
						wx.switchTab({
							url:'/pages/index/main'
						})
					},1000)
				} else {
					//用户按了拒绝按钮
					wx.showModal({
						content: "授权失败，请点重新授权。",
						showCancel: false,
						success: function(res) {
							if(res.confirm) {
								console.log('用户点击确定')
							}
						}
					});
				}
			},
		}

	}
</script>

<style>

</style>