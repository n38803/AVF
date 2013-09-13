$(document).on('pageinit', function(){
	

	
	// JSON ajax parse from Instagram API
	$('#json').on("click", function(){
		
		$('#list ul').remove();
		
		var tag = "kittens"; //this could also be based on a form field
		var url = "https://api.instagram.com/v1/media/popular?client_id=67cce2a91aff4039b40cce1214bb49bd";
		$.getJSON(url, function(data) {
        	for (var i in data.entries) {
        		$('#list').append('<ul>' + data.entries[i].name + '</ul>');
        		$('#list ul').append('<li>' + data.entries[i].date + '</li>');
        		$('#list ul').append('<li>' + data.entries[i].calories + '</li>');    
        	}
  		});
	
	
});
