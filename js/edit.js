//保存草稿
$("$e-sv-btn").click(function(){
	$.ajax({
		type: "POST",
		url: "save-url",
		data: JSON.stringify(GetJsonData()),
		dataType: "JSON"
		success: function (message) {
			if (message>0){
				//成功后的提示
				$("#editor").html("提交数据成功。")
			}
		},
		error: function (message) {
			$("#editor").html("提交数据失败。")
		}
	});
});
//发布数据
$("$e-publish-btn").click(function(){
	$.ajax({
		type: "POST",
		url: "publish-url",
		data: JSON.stringify(GetJsonData()),
		dataType: "JSON",
		success: function(message) {
			if (message>0) {
				$("#editor").html("提交数据成功。")
			}
		},
		error: function(message) {
			$("#editor").html("提交数据失败。")
		},
	})
})
function GetJsonData(){
	var json = {
		"article-content": $("textarea").find("#editor").contents(),
		"article-title": $("textarea").find(".e-article-title").contents()
	};
	return json;
}