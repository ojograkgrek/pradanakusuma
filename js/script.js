// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // ambil isi href
    var href = $(this).attr('href');
    // tangkap elemen bersangkutan
    var tujuan = $(href);
    //console.log(elemenTujuan.offset().top);
    //console.log($('body').scrollTop());
    // $('body').scrollTop('0');

    $('body').animate({
        scrollTop: tujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});