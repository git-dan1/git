$("#nav>.li>ul").hide()
$("#nav>.li").click(function(){
	$(this).children("ul").slideToggle();
	$(this).siblings().children("ul").slideUp()
	$(this).children("ul").children().click(function(ev){
		var ev=event||ev;
		ev.stopPropagation()
		$(this).addClass("click").siblings().removeClass("click")
	})
})
