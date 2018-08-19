import Vue from 'vue'
import App from './App'
import './css/app.css'
import store from './store';
import '../static/weui/weui.css';
import '../static/font-awesome.css'
import '../static/weui/index.scss'
//Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$store = store;
const app = new Vue({
  App
})
app.$mount();

export default {
  config: {
    "pages": [
      "^pages/index/main",
      "pages/papers/main",
      "pages/welcome/main",
      "pages/shopping/main",
      "pages/zxdetile/main",
      "pages/zxdetilesp/main",
      "pages/mine/main",
      "pages/indexDetile/main",
      "pages/ywc/main",
      "pages/dfh/main",
      "pages/dsh/main",
      "pages/dsk/main",
      "pages/dfk/main",
      "pages/tksh/main",
      "pages/myjifen/main",
      "pages/shdz/main",
      "pages/fabu/main",
      "pages/jifenduihuanxq/main",
      "pages/jifenshangc/main",
      "pages/myfabu/main"
    ],
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#e50150",
      "navigationBarTitleText": "首页",
      "navigationBarTextStyle": "#ffffff"
    },
    "tabBar": {
      "color": "#000000",
      "selectedColor": "#DF3031",
      "list": [
        {
          "pagePath": "pages/index/main",
          "text": "首页",
          "iconPath": "/static/images/home/homeicon_24.jpg",
          "selectedIconPath": "/static/images/home/homeicon_24.jpg"
        },
        {
          "pagePath": "pages/papers/main",
          "text": "资讯",
          "iconPath": "/static/images/home/homeicon_26.jpg",
          "selectedIconPath": "/static/images/home/homeicon_26.jpg"
        },
        {
          "pagePath": "pages/fabu/main",
          "text": "发布",
          "iconPath": "/static/images/home/homeicon_28.jpg",
          "selectedIconPath": "/static/images/home/homeicon_28.jpg"
        },
        {
          "pagePath": "pages/jifenshangc/main",
          "text": "积分",
          "iconPath": "/static/images/home/homeicon_31.jpg",
          "selectedIconPath": "/static/images/home/homeicon_31.jpg"
        },
        {
          "pagePath": "pages/mine/main",
          "text": "我的",
          "iconPath": "/static/images/home/homeicon_34.jpg",
          "selectedIconPath": "/static/images/home/homeicon_34.jpg"
        }
      ]
    }
  }
}

