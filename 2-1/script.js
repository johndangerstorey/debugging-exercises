$._get = function(url, callback) {
	console.log('url');
	if (!url) return;
	callback({
		results: ['Awesomeness', 'Amazing', 'Astounding', 'Congrats, you got it.']
	})
}

$(document).ready(function() {
	console.log('setupAPI');
	var masterLocation;
	var search_term = 'devmountain';
	function setupApi() {
		masterLocation = 'http://devmounta.in?q='+search_term;		
		$(document).ajaxError(function(e, xhr, settings, thrown) {
			console.log("Ajax ERROR", xhr, settings, thrown);
		})
	}
	setupApi();
	console.log('setupAPI2');
	$._get(masterLocation, function(data) {
		console.log('get');
		$.each(data.results, function(index, tweet) {
			console.log('each');
			$('#results').append('<p><span class="glyphicon glyphicon-thumbs-up"></span> '+tweet+'</p>');
		});
	});
});