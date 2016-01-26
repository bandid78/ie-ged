
$(function(){
	if(window.PIE){
		$('.piejs, .rounded, .button, .card, .thumbnail').each(function(){
			PIE.attach(this);
		});
	}
});