<template>
  <div class="page">
      <div class="weui-search-bar">
        <div class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
            <input type="text" class="weui-search-bar__input" placeholder="搜索" v-model="inputVal" :focus="inputShowed" @input="inputTyping" />
            <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
              <icon type="clear" size="14"></icon>
            </div>
          </div>
          <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
            <icon class="weui-icon-search" type="search" size="14"></icon>
            <div class="weui-search-bar__text">搜索</div>
          </label>
        </div>
        <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">取消</div>
      </div>
     <!--
     	作者：1193950650@qq.com
     	时间：2018-08-05
     	描述：以上是搜索框
     -->
    <div class="page__bd page__bd_spacing">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">
        <div v-for="(item, index) in imgUrls" :key="index">
          <swiper-item>
              <div class="weui-grids">
					          <block v-for="(items,indexs) in item.list" :key="indexs">
					                <navigator url="" class="weui-grid" hover-class="weui-grid_active">
					                    <image class="weui-grid__icon" :src="items.src" />
					                    <div class="weui-grid__label">{{items.name}}</div>
					                </navigator>
					          </block>
					  	</div>
          </swiper-item>
        </div>
      </swiper>
    </div>
			<!--
            	作者：1193950650@qq.com
            	时间：2018-08-05
            	描述：以上是九宫格
       -->
			<div class="gg">
					<img class="img" src="/static/images/gg_03.jpg"/>
			</div>
			
			<!--
            	作者：1193950650@qq.com
            	时间：2018-08-05
            	描述：切换加载
            -->
            
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
          	<list-v></list-v>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 1"><list-v></list-v></div>
          <div class="weui-tab__content" :hidden="activeIndex != 2"><list-v></list-v></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listV from '@/components/indexlist'
export default {
  data() {
    return {
			inputShowed: false,
      inputVal: '',
      //以上是搜索
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 500,
      circular: false,
      imgUrls:[{list:[{ src: '/static/images/icon_nav_button.png', name: 'Button' },
        { src: '/static/images/icon_nav_cell.png', name: 'Cell' },
        { src: '/static/images/icon_nav_toast.png', name: 'Toast' },
        { src: '/static/images/icon_nav_dialog.png', name: 'Dialog' },
        { src: '/static/images/icon_nav_button.png', name: 'Progress' },
        { src: '/static/images/icon_nav_panel.png', name: 'Msg' },
        { src: '/static/images/icon_nav_article.png', name: 'Article' },
        { src: '/static/images/icon_nav_actionSheet.png', name: 'ActionSheet' },
        { src: '/static/images/icon_nav_icons.png', name: 'Icons' }]},{},{}],
      
      
      tabs: ['选项一', '选项二', '选项三'],
      activeIndex: 0,
      fontSize: 30,
      navbarSliderClass:'weui-navbar__slider_0'
    }
  },
  mounted(){
		this.navbarSliderClass1();
  },
  methods: {
  	 navbarSliderClass1() {
      if (this.activeIndex == 0) {
         this.navbarSliderClass = 'weui-navbar__slider_0'
      }
      if (this.activeIndex == 1) {
         this.navbarSliderClass = 'weui-navbar__slider_1'
      }
      if (this.activeIndex == 2) {
         this.navbarSliderClass = 'weui-navbar__slider_2'
      }
    },
    openurl:function(){
    	wx.navigateTo({
    		url:'/pages/list/main?id='+12121212
    	});
    },
     showInput() {
      this.inputShowed = true;
    },
    hideInput() {
      this.inputVal = '';
      this.inputShowed = false;
    },
    clearInput() {
      this.inputVal = '';
    },
    inputTyping(e) {
      console.log(e);
      this.inputVal = e.mp.detail.value;
      console.log('输入信息为：'+e.mp.detail.value);
    },
    tabClick(e) {
      this.activeIndex = e.currentTarget.id;
      this.navbarSliderClass1();
    }
  },
  components:{listV},
}
</script>

<style lang="css" scoped="scoped">
	.page__bd_spacing{
		padding: 0px;
		background-color: white;
	}
	.weui-search-bar{
		border-bottom: none;
	}
	.weui-grid{
		position:relative;
		float:left;
		padding:40rpx 20rpx;
		width:24.33333333%;
		box-sizing:border-box;
		border-right:none;
		border-bottom:none;

	}
	
	.weui-grids{
		border: none;
	}
	swiper {
	display:block;
	height:410rpx;
	}
	.gg{
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
		height: auto;
	}
	.img{
		height: 212rpx;
		width: 100%;
	}
	.weui-navbar{
		background-color: white;
	}
	.weui-tab__content{
		margin-top: 20px;
	}
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
