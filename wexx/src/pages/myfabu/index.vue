<template>
  <div class="page">
      <div class="page__bd">
          <div class="myfabu" v-for="(myfabu,index) in datalist" :key="index">
            <div class="font_8 a">
              {{myfabu.time}}
            </div>
            <div class="b">
              <div class="ba">
                <span class="font_10" style="float: left;">{{myfabu.title}}</span><span class="font_8" style="color: #e5014f;float: right;">{{myfabu.leix}}</span>
              </div>
              <div class="font_12 bb" style="color: #e5014f;">
                {{myfabu.money}}
              </div>
              <div class="font_8 bc">
                  {{myfabu.adress}}
              </div>
              <div class="bd font-10">
                <span @click="openurl()">编辑</span>
                <span @click="sanchu()">删除</span>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
  export default {
    name: "index",
    data(){
      return{
        datalist:[
          {time:'20120-12-12',title:'发布的内容发布的内容发布的内容',leix:'同城交友',money:'232323',adress:'发布的内容发布的内容发布的内容'},
          {time:'20120-12-12',title:'发布的内容发布的内容发布的内容',leix:'同城交友',money:'232323',adress:'发布的内容发布的内容发布的内容'},
          {time:'20120-12-12',title:'发布的内容发布的内容发布的内容',leix:'同城交友',money:'232323',adress:'发布的内容发布的内容发布的内容'},
          {time:'20120-12-12',title:'发布的内容发布的内容发布的内容',leix:'同城交友',money:'232323',adress:'发布的内容发布的内容发布的内容'},
          {time:'20120-12-12',title:'发布的内容发布的内容发布的内容',leix:'同城交友',money:'232323',adress:'发布的内容发布的内容发布的内容'}
        ]
      }
    }
  };
</script>

<style scoped lang="scss">
  .myfabu{
    height: auto;
    width: 100%;
    box-sizing: border-box;
    padding: 20rpx;
    .a{
      background-color:#f5f5f5;
      color:#666666;
      height:40rpx;
      line-height:40rpx;
      margin-bottom:6rpx;

    }
    .b{
      background: white;
      padding: 5rpx 10rpx;
      .ba{
        overflow: hidden;
        margin-bottom:10rpx;

      }
      .bb{}
      .bc{}
      .bd{
        border-top: 1rpx solid #f5f5f5;
        margin-top: 22rpx;
        span{
          display: inline-block;
          height: 50rpx;
          line-height: 50rpx;
          text-align: center;
          border-right: 1rpx solid #f5f5f5;
          width: 49.8%;
          &:last-child{
            border-right: none;
          }
        }
      }
    }
  }
</style>
