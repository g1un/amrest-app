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
//percent-circle
if($('.percent-circle').length) {
	var percentInput = $('.percent-circle__input');

	function countCircle(val, $circle) {
		if (isNaN(val)) {
			val = 100;
		}
		else{
			var r = $circle.attr('r');
			var c = Math.PI*(r*2);

			if (val < 0) { val = 0;}
			if (val > 100) { val = 100;}

			var pct = ((100-val)/100)*c;

			$circle.css({strokeDashoffset: pct});

			$circle.closest('.percent-circle').children('.percent-circle__value').attr('data-pct',val);
		}
	}

	percentInput.each(function () {
		if($(this).hasClass('js-percent-input-text')) {
			$(this).parent().children('.percent-circle__value').attr('data-pct', $(this).val());
		} else {
			countCircle(parseInt($(this).val()), $(this).parent().find('.percent-circle__bar'));
		}
	});

	percentInput.on('input', function(){
		if($(this).hasClass('js-percent-input-text')) {
			$(this).parent().children('.percent-circle__value').attr('data-pct', $(this).val());
		} else {
			countCircle(parseInt($(this).val()), $(this).parent().find('.percent-circle__bar'));
		}
	});
}
/*/script*/