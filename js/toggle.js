$(document).ready(function(){
	$('.toggle-item__title').on('click',function(){

		if(!$(this).parent().hasClass('active')){
			$('.toggle-item').removeClass('active');
			$('.toggle-item__text').slideUp(900);
			$(this).parent().addClass('active');
			$(this).parent().find('.toggle-item__text').slideDown(900);
		}
		else{
			$(this).parent().removeClass('active');
			$(this).parent().find('.toggle-item__text').slideUp(900);
		}
	});

});
