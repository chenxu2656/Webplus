$(function(){
	/*栏目图片高度*/
	var $lbannerImg = $(".l-banner").find("img");
	var imgsrc = $lbannerImg.attr("src");
	if(imgsrc == "" || imgsrc == undefined){
		var imgsrc = $lbannerImg.data("imgsrc");
	}
	//$lbannerImg.attr("src",imgsrc);
	$(".l-banner").css("backgroundImage","url("+imgsrc+")");
}); 




