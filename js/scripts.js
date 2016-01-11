
$(function(){
	if(window.PIE){
		$('.piejs').each(function(){
			PIE.attach(this);
		});
	}
});