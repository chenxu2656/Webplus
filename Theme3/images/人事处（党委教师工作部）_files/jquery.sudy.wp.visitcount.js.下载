/**
 * 主要为了实现文章评价功能
 * add by lcfeng
 */
;
(function($) {
    $.fn.WPVisitCount = function(options) {
        var defaults = {};
        var options = $.extend(defaults, options);
        $(this).each(function() {
            var url = $(this).attr("url");
            if (url) {
                initVisitCount(url, $(this));
            }
        });

        //初始化访问次数
        function initVisitCount(url, obj) {
            $.ajax({
                type: "post",
                dataType: "text",
                url: url,
                success: function(result) {
                    if (result !== '' && result !== '0' && result !== '<span>0</span>') {
                        obj.html(result);
                        obj.show();
                    }
                },
                error: function(error) {
                }
            });
        }
    };
    
    $.fn.WPColListVisitCount = function(options) {
       var defaults = {};
        var options = $.extend(defaults,options);
        var colId = new Array();
        var colIds = "";
        $(this).each(function(){
           var id = $(this).attr("colId");
            var siteId = $(this).attr("siteId");
            id += "_"+siteId;
            colId.push(id);
            colId = unique(colId);
        });
        colIds = colId.join(",");
        if(colIds==""){
            return;
        }
        var url ="";
        var con = $("script[sudy-wp-context]").attr("sudy-wp-context");
        if(con){
            con = "/" + con;
            url += con;
        }
        url += "/_visitcountdisplay?columnIds="+colIds;
        var type = $("span[class=WP_ColsVisitCount]").attr("type");
        if(type){
            url += "&type="+type;
        }
        url += "&funType=0";
        initColListVisitCount(url);
    };
    
     function initColListVisitCount(url){
        $.ajax({
            url:url,
            dataType:'json',
            type:'post',
            success:function(result){
                if(result !== '' && result !== null){
                    $.each(result,function(n,value){
                        var listVisitCount=$("span[colListVisitCountId=wp_colListVisitCount_"+value.columnId+"]");
                        listVisitCount.html(value.count);
                        listVisitCount.css('visibility','visible');
                    });
                }
            }
        });
    };
    
    $.fn.WPArticleReadStatus = function(options){
        var defaults = {};
        var options = $.extend(defaults,options);
        var artId = new Array();
        var articleIds = "";
        $(this).each(function(){
            var id = $(this).attr("artId");
            artId.push(id);
            artId = unique(artId);
        });
        articleIds = artId.join(",");
        var url ="";
        var con = $("script[sudy-wp-context]").attr("sudy-wp-context");
        if(con){
            con = "/" + con;
            url += con;
        }
        url += "/_visitcountdisplay?articleIds="+articleIds;
        var siteId = $("script[sudy-wp-siteId]").attr("sudy-wp-siteId");
        if(siteId){
            url += "&siteId="+siteId;
        }
        url += "&funType=1";
        initReadStatus(url);
    };
    
    function unique(arr){
        var res = [];
        var json = {};
        for(var i=0;i<arr.length;i++){
            if(!json[arr[i]]){
                res.push(arr[i]);
                json[arr[i]]=1;
            }
        }
        return res;
    }
    
    function initReadStatus(url){
        $.ajax({
            url:url,
            dataType:'text',
            type:"post",
            success:function(result){
                if(result !== ""){
                    var artIds = result.split(",");
                    for(var i=0;i<artIds.length;i++){
                        $("span[readStatusId=wp_artReadStauts_"+artIds[i]+"]").addClass("wp_artReadStatus_unread");
                    }
                }
            }
        });
    };
    
    $.fn.WPListVisitCount = function(options){
        var defaults = {};
        var options = $.extend(defaults,options);
        var artId = new Array();
        var articleIds = "";
        $(this).each(function(){
            var id = $(this).attr("artId");
            artId.push(id);
            artId = unique(artId);
        });
        articleIds = artId.join(",");
        var url ="";
        var con = $("script[sudy-wp-context]").attr("sudy-wp-context");
        if(con){
            con = "/" + con;
            url += con;
        }
        url += "/_visitcountdisplay?articleIds="+articleIds;
        var siteId = $("script[sudy-wp-siteId]").attr("sudy-wp-siteId");
        if(siteId){
            url += "&siteId="+siteId;
        }
        var type = $("span[class=wp_listVisitCount]").attr("type");
        if(type){
            url += "&type="+type;
        }
        url += "&funType=0";
        initListVisitCount(url);
    };
    
    function initListVisitCount(url){
        $.ajax({
            url:url,
            dataType:'json',
            type:'post',
            success:function(result){
                if(result !== '' && result !== null){
                    $.each(result,function(n,value){
                        var listVisitCount=$("span[listVisitCountId=wp_listVisitCount_"+value.articleId+"]");
                        listVisitCount.html(value.count);
                        listVisitCount.css('visibility','visible');
                    });
                }
            }
        });
    };
})(jQuery);

$(document).ready(function() {
    $('.WP_VisitCount').WPVisitCount();
    $('.wp_artReadStatus').WPArticleReadStatus();
    $('.wp_listVisitCount').WPListVisitCount();
    $('.WP_ColsVisitCount').WPColListVisitCount();
}); 