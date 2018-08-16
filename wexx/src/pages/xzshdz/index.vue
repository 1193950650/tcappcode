<template>
 <div class="page" style="background-color: white;height: 100%;overflow: hidden;">
   <div class="page__bd" >
     <div style="padding: 0rpx 20rpx;">
       <div class="weui-cell weui-cell_input" style="border-bottom: 2rpx solid #f5f5f5;">
         <div class="weui-cell__hd">
           <div class="weui-label font_10">收货人：</div>
         </div>
         <div class="weui-cell__bd">
           <input class="weui-input"  placeholder="请输入收货人姓名" />
         </div>
       </div>

       <div class="weui-cell weui-cell_input" style="border-bottom: 2rpx solid #f5f5f5;">
         <div class="weui-cell__hd">
           <div class="weui-label font_10">联系方式：</div>
         </div>
         <div class="weui-cell__bd">
           <input class="weui-input"  placeholder="请输入您的联系方式" />
         </div>
       </div>

       <div class="weui-cell weui-cell_input" style="border-bottom: 2rpx solid #f5f5f5;">
         <div class="weui-cell__hd">
           <div class="weui-label font_10">所在地区：</div>
         </div>
         <div class="weui-cell__bd">
           <input class="weui-input"  placeholder="请输入您的所在地区" />
         </div>
       </div>

       <div class="weui-cell weui-cell_input" style="border-bottom: 2rpx solid #f5f5f5;">
         <div class="weui-cell__hd">
           <div class="weui-label font_10">地址详情:</div>
         </div>
         <div class="weui-cell__bd">
           <textarea name="" id="" style="height: 150rpx;padding: 20rpx 0rpx;width: 100%;" placeholder="街道，楼栋号"></textarea>
         </div>
       </div>

       <div class="weui-cell weui-cell_input" style="border-bottom: 2rpx solid #f5f5f5;height: 105rpx;">
         <div class="weui-cell__hd">
           <div class="weui-label font_10">标签：</div>
         </div>
         <div class="weui-cell__bd">
           <span class="active">默认</span>
           <span>家</span>
           <span>公司</span>
         </div>
       </div>
     </div>
     <div style="position: fixed;bottom: 80rpx;left: 0rpx;width: 100%;text-align: center">
       <span  style="color: white;padding: 10rpx 20rpx;width: 300rpx;display: inline-block;border-radius: 9rpx;height: 60rpx;line-height:60rpx;background-color: #e5014f">保存</span>
     </div>
   </div>
 </div>
</template>

<script>
  export default {
    name: "index"
  };
</script>

<style scoped lang="scss">
  .weui-cell__bd{
    span{
      color: #666666;
      background-color: #f5f5f5;
      padding: 4rpx 20rpx;
      margin-right: 35rpx;
      border-radius: 5rpx;
    }
    .active{
      color: #e5014f;
    }
  }
</style>
