$(document).on('pageinit', function(){
	
	console.log("Page Ready!");
	

	// Instagram Search Form
	$('#instaSubmit').on("click", function(){
		
		alert("Function Currently Unavailable - Please make another selection");
		
  	}); // end form submit  	

	// Instagram Auto Populate by User Prompt
	$('#instaPopulate').on("click", function(){
		
		alert("Populating Instagram Results...");
		
		// $('#instaList').remove();

	    $.ajax({
        	type: "GET",
        	dataType: "jsonp",
        	url: "https://api.instagram.com/v1/media/popular?client_id=67cce2a91aff4039b40cce1214bb49bd",
        	success: function(info) {
        	    console.log(info);
        	    
        	    for (var i = 0; i < 5; i++) {
                    $("#instaList").append("<li><img src='" + info.data[i].images.standard_resolution.url + "' alt='" + info.data[i].user.id + "' /><h4>" + info.data[i].user.full_name + ", <em>(" + info.data[i].user.username +")</em></h4></li>");
				} // end for loop
				
        	} // end success function
        	
        }); // end ajax call
    	
  	
  	}); // end ajax parse submit
  	
  	
  	

	// Thesaurus Search Form
	$('#thesSubmit').on("click", function(){
		
		alert("Function Currently Unavailable - Please make another selection");
		
  	}); // end form submit

	// Thesaurus Results by User Prompt
	$('#thesPopulate').on("click", function(){
		alert("Loading Request...");
		
		// $('#thesList').remove();
		var tag = "Development";
		
	    $.ajax({
        	type: "GET",
        	dataType: "jsonp",
        	url: "http://words.bighugelabs.com/api/2/7b7810fb805241407b7d474b9b8ccfef/" + tag + "/json" ,
        	success: function(data) {
        	
        	    console.log(data);
        	    $("#thesMessage").html("<h2>Synonyms of '<em>" + tag + "</em>:'</h2>");
        	    
        	    for (var i = 0; i < data.noun.syn.length; i++) {
                    $("#thesList").append("<li>" + data.noun.syn[i] + "</li>");
				} // end for loop
				
        	} // end success function
        	
        }); // end ajax call
    
  	
  	}); // end ajax parse submit	
	
}); // end page init



