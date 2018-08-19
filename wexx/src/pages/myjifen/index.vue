<template>
  <div class="page" style="padding-bottom: 20rpx;">
    <div class="user">
      <div class="a">
        <div class="font-7" style="color: white;font-size: 6pt;padding-top: 40rpx;">当前积分</div>
				<div class="font-12" style="color: white;font-size:15pt;padding-top: 25rpx;">
					9090909090
				</div>
      </div>
      <div class="b">
        <span style="border:1rpx solid white;border-radius:13rpx;padding:6rpx 20rpx;font-size:12pt;">立即兑换</span>
      </div>
    </div>
    <div style="padding: 15rpx">
      <div style="font-size: 8pt;color: #666666;margin-bottom: 18rpx;">输入兑换码兑换</div>
      <div style="height: 90rpx;width: 100%;overflow: hidden;margin-top: 10rpx">
        <input type="text" style="border-radius:8rpx;border: 1rpx solid #666666;height: 85%;text-align: center;color:#e5014f;">
      </div>
      <div style="width: 100%;text-align: right;margin-top: 18rpx;">
        <span style="color: white;font-size: 12pt;background-color: #e5014f;padding: 8rpx 15rpx;border-radius: 6rpx">兑换</span>
      </div>
    </div>
    <div class="zxsp">
      <p class="zxsp-a">
        <span>本月</span>
        <span style="float: right;border: none;font-size: 10pt;color: gainsboro;margin-top: 3rpx;">查看更多</span>
      </p>
    </div>
    <div class="jfmx">
      <div class="a">
        <div class="font_9 aa">积分明细（购买商品）</div>
        <div class="font_7 bb">2012-12-12 99:99:99</div>
      </div>
      <div class="b">
        +6500
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
    }
  }
</script>

<style>

</style>
