$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var text = $('#textinput').val();
	alert("Thank you for submitting all your details to the lord of darkness.");
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
}