<template>
  <div class="page">
			传递过来的参数为：{{id}}
  </div>
</template>

<script>
export default {
  data() {
    return {
			id:''
    }
  },
  methods: {
    open() {
      wx.showActionSheet({
        itemList: ['A', 'B', 'C'],
        success: function (res) {
          console.log(res.tapIndex)
        }
      });
    }
  },
  onLoad(options){
  	this.id = options.id
  	wx.setNavigationBarTitle({
  		title:'list'
  	})
  },
  onHide(){
  	console.log('onhide');
  },
    mounted(){
  	console.log('mounted');
  },
  onShow(){
  	console.log('onshow');
  },

}
</script>

<style>

</style>
