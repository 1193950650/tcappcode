

export var get = function(url,data){
return new Promise((resolve,reject)=>{
	wx.request({
		url:url,
		data:data,
		method:'GET',
		success:function(res){
			if(res.data.code == '0'){
				resolve(res);
			}else{
				reject(res);
			}
		},
		fail:function(re){
			reject(re)
		}
	})
});

return new Promise();
}

export var post = function(url,data){
return new Promise((resolve,reject)=>{
	wx.request({
		url:url,
		data:data,
		method:'POST',
		success:function(res){
			if(res.data.code == '0'){
				resolve(res);
			}else{
				reject(res);
			}
		},
		fail:function(re){
			reject(re)
		}
	})
});
}

