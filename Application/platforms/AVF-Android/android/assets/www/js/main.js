
// JQUERY PAGE INIT [APIs]
$(document).on('pageinit', function(){

console.log("JQUERY Page Init");

//-[Data APIs]----------------------------------------------------------------------------
	
	
	var instaSubmit = function(){
		
		alert("Function Currently Unavailable - Please make another selection");
		
  	}; // end instagram form submit	
	
	var instaPopulate = function(){
		
		alert("Populating Instagram Results...");
		
		// $('#instaList').remove();

	    $.ajax({
        	type: "GET",
        	dataType: "jsonp",
        	url: "https://api.instagram.com/v1/media/popular?client_id=67cce2a91aff4039b40cce1214bb49bd",
        	success: function(info) {
        	    console.log(info);
        	    
        	    for (var i = 0; i < 6; i++) {
                    $("#instaList").append("<li id='i'" + i + "' class='images'><img src='" + info.data[i].images.standard_resolution.url + "' alt='" + info.data[i].user.id + "' /><h4>" + info.data[i].user.full_name + ", <em>(" + info.data[i].user.username +")</em></h4></li>");
					console.log("i" + i);
				} // end for loop
				
        	} // end success function
        	
        }); // end ajax call
    	
  	
  	}; // end instagram populate 
	
	var theSubmit = function(){
		
		alert("Function Currently Unavailable - Please make another selection");
		
  	}; // end thesaurus form submit
	
	var thesPopulate = function(){
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
    
  	
  	}; // end thesaurus populate	



	// Instagram Search Form
	$('#instaSubmit').on("click", instaSubmit);
	
	// Instagram Auto Populate by User Prompt
	$('#instaPopulate').on("click", instaPopulate);
	


	// Thesaurus Search Form
	$('#thesSubmit').on("click", theSubmit);
	
	// Thesaurus Results by User Prompt
	$('#thesPopulate').on("click", thesPopulate);
	
	
}); // End JQUERY Page Init









// PhoneGap deviceready EventListener
document.addEventListener("deviceready", onDeviceReady, false);  	



//-[Alert Functions]----------------------------------------------------------------------  	
    function soundDismiss(){
    
    	console.log("Notification Beep");	

    }; // end sound dismiss  
    function vibrateDismiss(){
    
    	console.log("Notification Vibrate");

    }; // end sound dismiss 	
 
 
  	
//-[Native Function Variables]------------------------------------------------------------
	var camera = function() {
	//load camera immediately? load buttons first?	
}; // end camera function
	var compass = function() {
	//check for connection? load data?	
};// end compass function
	var contacts = function() {
	//do something	
};// end contacts function  	


	var connections = function() {
		
		alert('Verifying Connection Settings...');	
	
		var networkState = navigator.network.connection.type;

    	var states = {};
    	states[Connection.UNKNOWN]  = 'Unknown connection';
    	states[Connection.ETHERNET] = 'Ethernet connection';
    	states[Connection.WIFI]     = 'WiFi connection';
    	states[Connection.CELL_2G]  = 'Cell 2G connection';
    	states[Connection.CELL_3G]  = 'Cell 3G connection';
    	states[Connection.CELL_4G]  = 'Cell 4G connection';
    	states[Connection.NONE]     = 'No network connection';

		$("#c-type").html("Current Connection: <em>" + states[networkState] + "</em>");
	
	}; // end connections function

	var beep = function() {
		
		console.log("Sound Notification");
       	
       	navigator.notification.alert('You have enabled Sound Notifications!', soundDismiss, 'ALERT!', 'Dismiss'); 
		navigator.notification.beep(3);
		
	};// end sound notifications function 
	
	var vibrate = function() {
		
		console.log("Vibrate Notification");
       	
       	navigator.notification.alert('You have enabled Vibration!', vibrateDismiss, 'ALERT!', 'Dismiss'); 
       	navigator.notification.vibrate(2000);
	
	};// end vibration notifications function  
	
	
	// ON DEVICE READY FUNCTION
	function onDeviceReady() {

	console.log("PhoneGap Device Ready!");
	
	

	// Camera Function
	$("#testConnection").on("click", connections);

	// Compass Function
	$("#compass").on("click", compass);
	
	// Contacts Function
	$("#contacts").on("click", compass);
	
	// Notification [sound] Function
	$("#soundOn").on("click", beep);
	
	// Notification [vibrate] Function
	$("#vibrateOn").on("click", vibrate);
	
	
	
}; // END PHONEGAP DEVICE READY