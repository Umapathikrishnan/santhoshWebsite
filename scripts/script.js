$(document).ready(function() {

	var $menuBtn = $('.menu-btn');
	var $nav = $('#nav');
	var $stylebox = $('#style-box');
	var $styleli = $stylebox.find('li');

	$menuBtn.on('click', function() {
		var $this = $(this);
		var styles = $stylebox.data('styles');
		$this.toggleClass("active");
		$this.next('#nav').toggleClass("open");
		$stylebox.toggleClass(styles);
	});

	$nav.addClass('leftslide');

	$styleli.on('click', function() {
		var $this = $(this);
		$this.siblings().removeClass('now');
		$this.addClass('now');
		var styles = $this.data('styles');
		$nav.removeClass();
		$nav.addClass(styles);
		$nav.siblings('#style-box').removeClass();
		$nav.siblings('#style-box').data('styles',styles);
	});



});