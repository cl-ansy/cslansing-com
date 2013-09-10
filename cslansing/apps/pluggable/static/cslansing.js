/*$('#sidenav-button').click(function() {
  $("i",this).toggleClass("icon-double-angle-down icon-double-angle-up");
});*/
$('.section-header').click(function() {
    $(this).next('.section-content').slideToggle();
    $("i",this).toggleClass("icon-chevron-down icon-chevron-up");
});
function changePage(pageNum){
    $('#attendance').load("/?page=" + pageNum + " #attendance-content");
};
