import $ from "jquery";
$.ajax({
    type:"get",
    url:"/api/index.php?r=index/ajaxnew&page=1",
    dataType:"json",
    success:function(data){
        console.log(data);
    }
})