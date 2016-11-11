/*script*/
//rest-search
if($('[name="restaurant"]').length) {
	$('[name="restaurant"]').on('focus', function () {
		$('.rest-find').addClass('rest-find--searching');
	});
	$('[name="restaurant"]').on('blur', function () {
		$('.rest-find').removeClass('rest-find--searching');
	});
}

//percent-circle
if($('.percent-circle__input').length) {
	$('.percent-circle__input').on('change', function(){
		var val = parseInt($(this).val());
		// var $circle = $('.percent-circle__bar');
		var $circle =  $(this).prev().children('.percent-circle__bar');

		console.log($circle);

		if (isNaN(val)) {
			val = 100;
		}
		else{
			var r = $circle.attr('r');
			var c = Math.PI*(r*2);

			if (val < 0) { val = 0;}
			if (val > 100) { val = 100;}

			var pct = ((100-val)/100)*c;

			$circle.css({ strokeDashoffset: pct});

			$circle.closest('.percent-circle').attr('data-pct',val);
		}
	});
}
/*/script*/