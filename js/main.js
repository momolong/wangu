$(function(){
var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',

        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        }
    })


mui.init();
	document.getElementById('introduce').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'introduce.html',//目标页面的url
    			id:'introduce',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
    createNew:false,
    })	
    })	
	document.getElementById('oneself').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'oneself.html',//目标页面的url
    			id:'oneself',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
    createNew:false,
    })	
    })	
   	document.getElementById('ceramic').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'ceramic.html',//目标页面的url
    			id:'ceramic',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
    createNew:false,
    })	
    })	
    document.getElementById('friends').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'friends.html',//目标页面的url
    			id:'friends',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
				createNew:false,
    })
    })	
    document.getElementById('street').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'street.html',//目标页面的url
    			id:'street',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
				createNew:false,
    })
    })	
    document.getElementById('shop').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'shop.html',//目标页面的url
    			id:'shop',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
				createNew:false,
    })
    })			
    document.getElementById('collection').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'collection.html',//目标页面的url
    			id:'collection',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
				createNew:false,
   })
    })	
    /*预加载*/
    mui.init({
    preloadPages:[
    { url:'friends.html', 
        id:'friends'
    },{url:'oneself.html', 
        id:'onself'
    },{url:'ceramic.html', 
        id:'ceramic'
    },{url:'street.html', 
        id:'street'
    },{url:'collection.html', 
        id:'collection' 
    },{url:'shop.html', 
        id:'shop'
    }
    ]
});

	
})