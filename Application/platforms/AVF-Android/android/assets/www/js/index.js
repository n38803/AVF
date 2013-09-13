/* AVF 1309 - Android Platform
JS sheet
*/

/* XHR Ajax Requests
$.load(url, get/post paramaters, callback on success)
$.ajax({settings})
$.getJSON(url, get paramaters, call back on success)

$.getJSON(url, function(data){ ... });
*/


/*	// SUBMIT INSTAGRAM SEARCH TO LOCAL STORAGE
	$('#submit').on("click", storeData(this.key));
	function storeData(key){
		if(!(key)){
			var id			= Math.floor(Math.random()*1000000001);
		}else{
			id = key;
		}
		var instagram			= {};
			instagram.search		= $('#search').val();
		
		localStorage.setItem(id, JSON.stringify(instagram));
		
		//localStorage.meals = JSON.stringify(meals);

		alert("Importing Search Results...");
	};
	
	// CLEAR SEARCH CRITERIA FROM LOCAL ESTORAGE
	$('#clear').on("click", function(){
		if(localStorage.length === 0){
			$('#list ul').remove();
			alert("Already Cleared!");
			return;
		}
		else{
			localStorage.clear();
  			alert("All Data Cleared.");
			console.log("Clear function completed.");
			
			$('#list ul').remove();
		};
	});	
	
*/
console.log("before function 1");

$(function() {			//if using a form field, use function(xxx) to 'catch' info
	var tag = "kittens"; //this could also be based on a form field
	var url = "https://api.instagram.com/v1/media/popular?client_id=67cce2a91aff4039b40cce1214bb49bd";
	console.log(tag);
$.getJSON(url, screenOutput);
	console.log(url);
});
	

var screenOutput = function(info) {
	console.log("after function");
	
	alert("screenOutput");
	console.log(info);
	
	$("#data-msg").html("<h2>Instagram Results:</h2>");
	
	// example html for pic
	// <img src='{url}' alt='{caption}' /><p>{caption}</p><p>{fullname}, <em>{username}</em></p>
	
	$.each(info.data, function(index, photo) { //photo is variable for identifier
	// index is the position within the array of 'info.data'
		var pic = "<li><img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>";
		$("#data-output").append(pic);
		
	}); //end each

}; //end instagram




$(function() {			//if using a form field, use function(xxx) to 'catch' info
	var tag = "joy"; //this could also be based on a form field
	var url = "http://words.bighugelabs.com/api/2/7b7810fb805241407b7d474b9b8ccfef/" + tag + "/json";
	console.log(tag);
$.getJSON(url, thesaurus);
	console.log(url);
});
	

var thesaurus = function(data) {
	console.log("after function");
	
	alert("Thesaurus!");
	console.log(info);
	
	$("#data-msg").html("<h2>Thesaurus Results:</h2>");
	
	// example html for pic
	// <img src='{url}' alt='{caption}' /><p>{caption}</p><p>{fullname}, <em>{username}</em></p>
	
	$.each(data.data, function(index, photo) { //photo is variable for identifier
	// index is the position within the array of 'info.data'
		var pic = "<li><img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>";
		$("#data-output").append(pic);
		
	}); //end each

}; //end instagram

