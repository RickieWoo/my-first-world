
$(function(){
	$.ajax({
		type:"POST",
		url:"",
		data:"json",
		success:function(result){
			addData(result);
		}
	});
});
function addData(result){
	$.each(result,function(index,obj){
		//用了marked不知道可不可以用啊
		//$("#article").append("<div class='artcle-inner'>")+marked(obj['article'])+"</div>");
		//$(".comment").append() 评论功能先放置
	  $("#about").append("<div article-id="
    +obj['article-id']+"class='article-box'>"+"<article class='article-inner'>"+"<a href="
    +obj['article-link']+"><h1 class='article-title'>"
    +obj['article-title']+"</h1><p class='article-content-view'>"
    +obj['article-inner']+"</p><time class='time-stamp' title="
    +obj['article-timestamp']+">"
    +obj['article-datetime']+"</time></a></article></div>")
  })
}
