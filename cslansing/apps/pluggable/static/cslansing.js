$('.section-header').click(function() {
    $(this).next('.section-content').slideToggle();
    $("html, body").animate({ scrollTop: $(this).offset().top }, 1000);
});
function changePage(targetId, contentId, pageNum){
    $('#' + targetId).load("/?page=" + pageNum + " #" + contentId);
}
