//var nocon = jQuery.noConflict();
$(function(){
  $.ajax({
    type: "GET",
    dataType: "xml",
    url: "/ajax_xml/xml/data.xml",
    success: function(data){
      var dataGallery = $(data).find('galleryList');
      var datagalleryList = dataGallery.find('gallery'); // Array
      var datagalleryFolder = $(data).find('galleryFolder').text();
      var dataGalleryStyle = $(data).find('galleryStyle').text();

      $("#galleryWrap").addClass(dataGalleryStyle);

      datagalleryList.each(function(i){
        var hrefData = $(this).find('galleryhref').text(); // 링크 값
        var srcData = "/ajax_xml/img/" + $(this).find('galleryimg').text(); // 이미지 경로
        var strongData = $(this).find('galleryStrong').text(); // 제목 값
        var spanData = $(this).find('galleryspan').text(); // 설명 값
        var emData = $(this).find('galleryem').text(); // 작가 이름

        var galleryliTag = "";

        galleryliTag += "<li><a href='"+hrefData+"'>";
        galleryliTag += "<img src='"+srcData+"'>";
        galleryliTag += "<strong>"+strongData+"</strong>";
        galleryliTag += "<span>"+spanData+"</span>";
        galleryliTag += "<em>"+emData+"</em>";
        galleryliTag += "</a></li>";

        $("#galleryWrap ul").append(galleryliTag);
      }); //// each
    },
    error: function(data, status, error){
      alert("code:"+data.status+"\n"+"message:"+data.responseText+"\n"+"error:"+error);
    },
  }); //// ajax
}); //// ready
