<template>
  <div class="page" style="width: 100%;overflow: hidden;box-sizing: border-box;">
      <div class="page__bd" style="width: 100%;overflow: hidden;box-sizing: border-box;">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells weui-cells_in-small-appmsg">
              <navigator url="/pages/myjifen/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__bd weui-cell_primary">
                  <div class="font_12">选择话题 <span class="font_10" style="color: #e5014f;">(同城交友)</span></div>
                </div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
              </navigator>
            </div>
          </div>
        </div>

        <div style="width: 100%;overflow: hidden;box-sizing: border-box;">
          <div style="width: 100%;overflow: hidden;box-sizing: border-box;">
            <textarea name="" id="" cols="30" rows="10" style="padding: 30rpx;font-size:10pt;width: 100%;box-sizing: border-box;overflow-x: hidden;" placeholder="请输入您要发布的话题"></textarea>
          </div>
        </div>

        <!--图片上传--->
        <div>
          <div class="weui-cells">
            <div class="weui-cell">
              <div class="weui-cell__bd">
                <div class="weui-uploader">
                  <div class="weui-uploader__hd">
                    <div class="weui-uploader__title">图片上传</div>
                    <div class="weui-uploader__info">{{files.length}}/2</div>
                  </div>
                  <div class="weui-uploader__bd">
                    <div class="weui-uploader__files" id="uploaderFiles">
                      <div v-for="(item ,index) in files" :key="index">
                        <div class="weui-uploader__file">
                          <image class="weui-uploader__img" :src="item" mode="aspectFill" @click="predivImage" :id="item" />
                          <div class="delete-icon" @click="deleteImg" :id="item"></div>
                        </div>
                      </div>
                    </div>
                    <div class="weui-uploader__input-box">
                      <div class="weui-uploader__input" @click="chooseImage"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_small-appmsg">
              <div class="weui-cells weui-cells_in-small-appmsg">
                <navigator url="/pages/myjifen/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                  <div class="weui-cell__bd weui-cell_primary">
                    <div class="font_12">地址详情</div>
                  </div>
                  <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </navigator>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="weui-cell weui-cell_input weui-cell_vcode" style="background-color: white;">
            <div class="weui-cell__hd">
              <div class="weui-label">手机号</div>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input" placeholder="请输入手机号" />
            </div>
          </div>
        </div>
        <checkbox-group @change="checkboxChange" style="margin-top: 40rpx;">
        <div class="weui-cells__tips" style="text-align: center">
          <label class="weui-cell weui-check__label" style="position: relative">
            <checkbox class="weui-check" :value="item.value" :checked="item.checked" />
            <div class="weui-cell__hd weui-check__hd_in-checkbox queren">
              <icon class="weui-icon-checkbox_circle" type="circle" size="13" v-if="!item.checked"></icon>
              <icon class="weui-icon-checkbox_success" type="success" size="13" v-if="item.checked"></icon>
            </div>
            <div class="weui-cell__bd">已经阅读用户协议</div>
          </label>
        </div>
          </checkbox-group>
        <div class="btn-fabu">
          <span >确定发布</span>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        files: [],
        item:{
          checked:'true',
          value:'1'
        }
      };
    },
    methods: {
      chooseImage(e) {
        let _this = this;
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function(res) {
            console.log('成功上传：' + res.tempFilePaths);
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            _this.files = _this.files.concat(res.tempFilePaths);
          },
          fail: function() {
            console.log('fail');
          },
          complete: function() {
            console.log('commplete');
          }
        });
      },
      predivImage(e) {
        console.log(e);
        wx.previewImage({
          current: e.currentTarget.id, // 当前显示图片的http链接
          urls: this.files // 需要预览的图片http链接列表
        });
      },
      deleteImg(e) {
        Array.prototype.indexOf = function(val) { // eslint-disable-line
          for (let i = 0; i < this.length; i++) {
            if (this[i] === val) return i;
          }
          return -1;
        };
        Array.prototype.remove = function(val) { // eslint-disable-line
          let index = this.indexOf(val);
          if (index > -1) {
            this.splice(index, 1);
          }
        };
        this.files.remove(e.currentTarget.id);
      },
      checkboxChange(){
        if(this.item.checked){
          this.item.checked = false;
        }else{
          this.item.checked = true;
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .btn-fabu{
    height: 65rpx;
    width: 100%;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    margin-top: 30rpx;
    span{
      display: inline-block;
      height: 100%;
      width: 60%;
      border-radius: 10rpx;
      background-color: #e5014f;
      color: white;
      font-size: 12pt;
      text-align: center;
      line-height: 65rpx;
    }
  }
  .queren{
    position:absolute;
    top:18rpx;
    left:-267rpx;
    right:0;
    bottom:0;
    margin:auto;
  }
  .weui-uploader__file {
    position: relative;
  }
  .weui-uploader__bd {
    overflow: visible;
  }
  .delete-icon {
    position: absolute;
    width: 40rpx;
    height: 40rpx;
    background: #f43530;
    right: 0;
    top: -20rpx;
    border-radius: 40rpx;
    z-index: 5;
  }
  .delete-icon::before {
    content: '';
    width: 26rpx;
    height: 4rpx;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
  }
</style>
