<template>
  <div class="page__bd">
      <div class="shdz">
        <div class="a">
          <div class="font_10">你的姓名</div>
          <div class="font_10">15723****223 <span class="font_7" style="background-color: #e5014f;padding: 4rpx 10rpx;color: white">默认</span></div>
          <div class="font_8" style="color: gainsboro;">修改</div>
        </div>
        <div class="font_7 b">地址详情</div>
      </div>

    <div style="position: fixed;bottom: 80rpx;left: 0rpx;width: 100%;text-align: center">
      <span @click="openurl()" style="color: white;padding: 10rpx 20rpx;width: 300rpx;display: inline-block;border-radius: 9rpx;height: 60rpx;line-height:60rpx;background-color: #e5014f">新增地址</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods:{
      openurl(){
        wx.navigateTo({
          url:'/pages/xzshdz/main'
        })
      }
    }
  };
</script>

<style scoped lang="scss">
  .shdz{
    background-color: white;
    padding: 20rpx;
    margin-bottom: 10rpx;
    .a{
      height: 80rpx;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
