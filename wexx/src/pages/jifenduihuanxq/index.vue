<template>
  <div class="page" style="height: 100%">
      <div class="page__bd" style="height: 100%;">
        <!--
       作者：1193950650@qq.com
       时间：2018-08-11
       描述：轮播图
   -->
        <div class="page__bd page__bd_spacing margin_bottom_20" style="padding: 0rpx;height: 400rpx;">
          <swiper class='swiper' :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">

            <swiper-item v-for="(item, index) in imgUrls" :key="index" style="overflow: hidden;">
              <img :src="item.imgurl" alt="" mode='heightFix' style="width: 100%;" />
            </swiper-item>
          </swiper>
        </div>
        <div class="jfxq">
          <div class="a">
            <div class="aa font_12">
              {{shopping.name}}
            </div>
            <div class="bb font_12" style="color: #e5014f">
              {{shopping.point}}
            </div>
          </div>
          <div class="b font_8">分享</div>
        </div>

        <div class="font_8" style="padding: 10rpx;color: #666666;margin-top: 35rpx;">
          详情介绍
        </div>
        <div style="padding: 10rpx;font-size: 10pt;color:#666666;">
          {{shopping.content}}
        </div>
      </div>
    <div class="duihuan">
      <div>立即兑换</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "index",
    data(){
      return {
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
        shopping:{
          name:'这是一个商品商品桑普',
          point:'232323',
          content:'asdasaadsad'
        }
      }
    }
  };
</script>

<style scoped lang="scss">
    page{
      height: 100%;
    }
    .page{
      height: 100%;
      background-color: white;
    }
  .duihuan{
    position:fixed;
    box-sizing:border-box;
    height:100rpx;
    background-color:white;
    //display:flex;
    //justify-content:space-between;
    width:100%;
    border-top:1rpx solid #999999;
    bottom:0px;
    left:0px;
    line-height: 100rpx;
    text-align: center;
    div{
      width: 80%;
      height: 80rpx;
      color: white;
      background-color: #e5014f;
      display: inline-block;
      line-height: 80rpx;
      text-align: center;
      border-radius: 8rpx;
    }
  }
</style>
