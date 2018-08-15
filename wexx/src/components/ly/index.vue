<template>
	<div class="">
		<div class="padding_20" style="margin-top: 20rpx;">用户留言</div>
		<div v-for='(items,index3) in datalist' :key='index3' class="uiuiui">
			<div class="opop">
				<div class="a"><img src="/static/images/home_03.jpg"/></div>
				<div class="b" style="width: 75%;">
					<span class="font_8">{{items.name}}</span>
					<span class="font_12">{{items.speack}}</span>
					<span class="font_8">{{items.time}}</span>
				</div>
				<!--<div class="c font_8">
					<!--<img src="/static/images/home/homeicon_14.jpg" alt="" /><span>{{items.zan}}</span>
				</div>-->
			</div>
		</div>
	</div>
</template>

<script>
	import bus from '@/utils/bus.js'
	export default {
		name:'ly',
		props:['cpid'],
		data(){
			return {
				datalist:[
					{
					tx:'/static/iamges/home_03.jpg',
					name:'LoyanMan',
					speack:'我觉得这个还是不错的哟~~~',
					zan:'33',
					time:'2012-12-12 19:30:00'
				},
				{
					tx:'/static/iamges/home_03.jpg',
					name:'LoyanMan',
					speack:'我觉得这个还是不错的哟~~~',
					zan:'33',
					time:'2012-12-12 19:30:00'
				}
				
				]
			}
		},
		methods:{
			getpl(){
				let id = this.cpid
			}
		}
	}
</script>

<style>
</style>