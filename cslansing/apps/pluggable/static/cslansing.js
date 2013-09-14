$('.section-header').click(function() {
    $(this).next('.section-content').slideToggle();
    $("html, body").animate({ scrollTop: $(this).offset().top }, 1000);
});
function changePage(pageNum){
    $('#attendance').load("/?page=" + pageNum + " #attendance-content");
};
