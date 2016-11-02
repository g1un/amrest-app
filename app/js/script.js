/*script*/
if($('[name="restaurant"]').length) {
	$('[name="restaurant"]').on('focus', function () {
		$('.rest-find').addClass('rest-find--searching');
	});
	$('[name="restaurant"]').on('blur', function () {
		$('.rest-find').removeClass('rest-find--searching');
	});
}
/*/script*/