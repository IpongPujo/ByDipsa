// $('.page-scroll').on('click', function(){

// 	// ambil ini href
// 	var tujuan = $(this).attr('href');
// 	// tangkep elemen ybs
// 	var elemenTujuan = $(tujuan);

// 	// pindah scroll
// 	$('body').animate({
// 		scrollTop: elemenTujuan.offset().top - 50
// 	}, 1250, 'easeInOutExpo');

// 	e.preventDefault();

// });

// $(window).on('load', function() {
// 	$('.pkiri').addClass('pmuncul')
// 	$('.pkanan').addClass('pmuncul')
// });

// (window).scroll(function() {
// 	var wScroll = $(this).scrollTop();

	// jumbotron
	// $('.jumbotron img').css({
	// 	'transform' : 'traslate(0px, '+ wScroll/4 +'%)'
	// });

	// $('.jumbotron h1').css({
	// 	'transform' : 'traslate(0px, '+ wScroll/2 +'%)'
	// });

	// $('.jumbotron p').css({
	// 	'transform' : 'traslate(0px, '+ wScroll/1.2 +'%)'
	// });


	// pertfolio
	if( wScroll > $('.galeri').offset().top - 250 ) {
		$('.galeri .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.galeri .thumbnail').eq(i).addClass('muncul');
				console.log('ok')
			}, 300 * (i+1));
		});
	}
});