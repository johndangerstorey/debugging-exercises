$(document).ready(function() {
	console.log('1')
	$('.list-group-items').click(function() {
		$(this).find('span').each(function(span) {
			var num = Number($(this).html());
			num--;
			if (num <= 0) {
				num = '';
			}
			$(this).html.(num);	
		})
	});
});