<template>
    <div class="jifenlist" style="position: relative;z-index: 99999;">
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

      <div >
        <div class="weui-tab" style="z-index: 99999;">
          <div class="weui-navbar">
            <block v-for="(item1,index) in tabs" :key='item1.value'>
              <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
                <div class="weui-navbar__title">{{item1}}</div>
              </div>
            </block>
            <div class="weui-navbar__slider" :class="navbarSliderClass1"></div>
          </div>
          <div class="weui-tab__panel">
            <div class="weui-tab__content" :hidden="activeIndex1 != 0">
              <div class="jflist">
                <div v-for="i in listdata" :key="i" class="everycontent" @click="openurl()">
                  <div class="a"><img :src="i.img" alt="" mode="heightFix"></div>
                  <div class="b font_10">{{i.point}}分</div>
                  <div class="c font_8">{{i.content}}</div>
                  <div class="d">
                    <!--<span class="aa">-->
                      <!--<img src="/static/logo/iocn_1/op(23).png" alt="">-->
                    <!--</span>-->
                    <span class="bb">立即兑换</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
  export default {
    name: "jifenlist",
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


        tabs: ['选项一', '选项二', '选项三'],
        activeIndex1: 0,
        fontSize: 30,
        navbarSliderClass1:'weui-navbar__slider_0',

        listdata:[
          {img:'/static/images/home_03.jpg',content:'文字头疼疼testtest文字玩死亡而撒地方是的范德萨',point:'343434'},
          {img:'/static/images/home_03.jpg',content:'文字头疼疼testtest文字玩死亡而撒地方是的范德萨',point:'343434'},
          {img:'/static/images/home_03.jpg',content:'文字头疼疼testtest文字玩死亡而撒地方是的范德萨',point:'343434'},
          {img:'/static/images/home_03.jpg',content:'文字头疼疼testtest文字玩死亡而撒地方是的范德萨',point:'343434'},
          {img:'/static/images/home_03.jpg',content:'文字头疼疼testtest文字玩死亡而撒地方是的范德萨',point:'343434'},
          {img:'/static/images/home_03.jpg',content:'文字头疼疼testtest文字玩死亡而撒地方是的范德萨',point:'343434'},

        ]
      }

    },
    methods:{
      navbarSliderClass12() {
        if (this.activeIndex1 == 0) {
          this.navbarSliderClass1 = 'weui-navbar__slider_0'
        }
        if (this.activeIndex1 == 1) {
          this.navbarSliderClass1 = 'weui-navbar__slider_1'
        }
        if (this.activeIndex1 == 2) {
          this.navbarSliderClass1 = 'weui-navbar__slider_2'
        }
      },
      tabClick(e) {
        this.activeIndex1 = e.currentTarget.id;
        this.navbarSliderClass12();
      },
      openurl(pramar){
        let url = '/pages/jifenduihuanxq/main?id='+pramar;
        wx.navigateTo({
          url:url
        })
      }
    }
  };
</script>

<style scoped lang="scss">
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
  .weui-navbar__slider{
    background-color: #e50150;
  }
  .weui-navbar__item.weui-bar__item_on {
    color: #e50150;
  }
</style>

