<template>
    <div class="scxq">
        <div v-for="(item,index) in datasc" :key="index" class="item">
          <navigator open-type="navigate" :url="item.url+'?id='+item.id">
            <img :src="item.src" alt="" mode="heightFix">
          </navigator>
        </div>
    </div>
</template>

<script>
  export default {
    name: "shangclist",
    data(){
      return {
        datasc:[
          {url:'/pages/spxq/main',src:'/static/images/testswiper_02.jpg',id:'1'},
          {url:'/pages/spxq/main',src:'/static/images/testswiper_02.jpg',id:'1'},
          {url:'/pages/spxq/main',src:'/static/images/testswiper_02.jpg',id:'1'},
          {url:'/pages/spxq/main',src:'/static/images/testswiper_02.jpg',id:'1'},
          {url:'/pages/spxq/main',src:'/static/images/testswiper_02.jpg',id:'1'},
          {url:'/pages/spxq/main',src:'/static/images/testswiper_02.jpg',id:'1'},
        ]
      }
    }
  };
</script>

<style scoped>

</style>
