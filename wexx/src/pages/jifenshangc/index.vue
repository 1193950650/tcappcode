<template>
  <div class="page">
      <div class="page__bd">
        <div class="page__bd">
          <div class="weui-tab">
            <div class="weui-navbar">
              <block v-for="(item,index) in tabs" :key="index">
                <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
                  <div class="weui-navbar__title">{{item}}</div>
                </div>
              </block>
              <div class="weui-navbar__slider" :class="navbarSliderClass"></div>
            </div>
            <div class="weui-tab__panel">
              <div class="weui-tab__content" :hidden="activeIndex != 0">
                <jifenlist></jifenlist>
              </div>
              <div class="weui-tab__content" :hidden="activeIndex != 1"><shangclist></shangclist></div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  import jifenlist from './jifenlist'
  import shangclist from './shangclist'

  export default {
    name: "index",
    data(){
      return {
        tabs: ['积分', '商城'],
        activeIndex: 0,
        fontSize: 30,
        navbarSliderClass:'weui-navbar__slider_0',
      }
    },
    components:{
      jifenlist,
      shangclist
    },
    methods:{
      navbarSliderClass1() {
        if (this.activeIndex == 0) {
          this.navbarSliderClass = 'weui-navbar__slider_0'
        }
        if (this.activeIndex == 1) {
          this.navbarSliderClass = 'weui-navbar__slider_2'
        }
        if (this.activeIndex == 2) {
          this.navbarSliderClass = 'weui-navbar__slider_2'
        }
      },
      tabClick(e) {
        this.activeIndex = e.currentTarget.id;
        this.navbarSliderClass1();
      },
    }
  };
</script>

<style scoped lang="scss">
  .weui-navbar__slider_0 {
    left: 29rpx;
    transform: translateX(60rpx);
  }
  .weui-navbar__slider_1 {
    left: 29rpx;
    transform: translateX(250rpx);
  }
  .weui-navbar__slider_2 {
    left: 29rpx;
    transform: translateX(438rpx);
  }
  .weui-navbar__slider{
    background-color: #e50150;
  }
  .weui-navbar__item.weui-bar__item_on {
    color: #e50150;
  }
</style>
