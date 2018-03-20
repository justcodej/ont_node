$(document).ready(function () {
	var $change_btn = $("#nav .content ul.menu li.last_menu>ul.one li");
	var $view_L_li = $("#main .container_new .news_events .news .news_right ul>li");
	var $view_R_img = $("#main .container_new .news_events .news .news_left a .img");
	init();

	$change_btn.click(function(){
		if($(this).index()){ // 英文
			$view_R_img.css("background","url('./images/index/view_1_en.jpg') no-repeat center/cover");
			$view_L_li.eq(0).find('a .img').css("background","url('./images/index/view_2_en.jpg') no-repeat center/cover");
			$view_L_li.eq(1).find('a .img').css("background","url('./images/index/view_3_en.jpg') no-repeat center/cover");
		}else{ // 中文
			$view_R_img.css("background","url('./images/index/view_1_cn.jpg') no-repeat center/cover");
			$view_L_li.eq(0).find('a .img').css("background","url('./images/index/view_2_cn.jpg') no-repeat center/cover");
			$view_L_li.eq(1).find('a .img').css("background","url('./images/index/view_3_cn.jpg') no-repeat center/cover");
		}
	});
	function init(){
		$view_R_img.css("background","url('./images/index/view_1_cn.jpg') no-repeat center/cover");
		$view_L_li.eq(0).find('a .img').css("background","url('./images/index/view_2_cn.jpg') no-repeat center/cover");
		$view_L_li.eq(1).find('a .img').css("background","url('./images/index/view_3_cn.jpg') no-repeat center/cover");
	}
/* 	$("#d14T").hover(function(){
		$("#d14D").css("display","block");
		},function(){
		$("#d14D").css("display","none");
	});
	$("#d16T").hover(function(){
		$("#d16D").css("display","block");
		},function(){
		$("#d16D").css("display","none");
	});
	$("#d18T").hover(function(){
		$("#d18D").css("display","block");
		},function(){
		$("#d18D").css("display","none");
	});

	$("#d21T").hover(function(){
		$("#d21D").css("display","block");
		},function(){
		$("#d21D").css("display","none");
	});
	$("#d34T").hover(function(){
		$("#d34D").css("display","block");
		},function(){
		$("#d34D").css("display","none");
	});
	$("#d36T").hover(function(){
		$("#d36D").css("display","block");
		},function(){
		$("#d36D").css("display","none");
	});

	$("#d39T").hover(function(){
		$("#d39D").css("display","block");
		},function(){
		$("#d39D").css("display","none");
	});
	$("#d41T").hover(function(){
		$("#d41D").css("display","block");
		},function(){
		$("#d41D").css("display","none");
	});
	$("#d43T").hover(function(){
		$("#d43D").css("display","block");
		},function(){
		$("#d43D").css("display","none");
	}); */

});