$(document).on("ready", function(){
	
	if ($(".mc-col-md-1 > .mc-col-md-white").height() > $(".mc-col-md-2 > .mc-col-md-white").height()) {
		$(".mc-col-md-2 > .mc-col-md-white").height($(".mc-col-md-1 > .mc-col-md-white").height());
	} else if ($(".mc-col-md-2 > .mc-col-md-white").height() > $(".mc-col-md-1 > .mc-col-md-white").height()) {
		$(".mc-col-md-1 > .mc-col-md-white").height($(".mc-col-md-2 > .mc-col-md-white").height());
	}

	if ($(".mc-col-md-3 > .mc-col-md-white").height() > $(".mc-col-md-4 > .mc-col-md-white").height()) {
		$(".mc-col-md-4 > .mc-col-md-white").height($(".mc-col-md-3 > .mc-col-md-white").height());
	} else if ($(".mc-col-md-4 > .mc-col-md-white").height() > $(".mc-col-md-3 > .mc-col-md-white").height()) {
		$(".mc-col-md-3 > .mc-col-md-white").height($(".mc-col-md-4 > .mc-col-md-white").height());
	}

	if ($(".mc-col-md-5 > .mc-col-md-white").height() > $(".mc-col-md-6 > .mc-col-md-white").height()) {
		$(".mc-col-md-6 > .mc-col-md-white").height($(".mc-col-md-5 > .mc-col-md-white").height());
	} else if ($(".mc-col-md-6 > .mc-col-md-white").height() > $(".mc-col-md-5 > .mc-col-md-white").height()) {
		$(".mc-col-md-5 > .mc-col-md-white").height($(".mc-col-md-6 > .mc-col-md-white").height());
	}

	if ($(".mc-col-md-7 > .mc-col-md-white").height() > $(".mc-col-md-8 > .mc-col-md-white").height()) {
		$(".mc-col-md-8 > .mc-col-md-white").height($(".mc-col-md-7 > .mc-col-md-white").height());
	} else if ($(".mc-col-md-8 > .mc-col-md-white").height() > $(".mc-col-md-7 > .mc-col-md-white").height()) {
		$(".mc-col-md-7 > .mc-col-md-white").height($(".mc-col-md-8 > .mc-col-md-white").height());
	}














	
	
	$(".og-grid > .mc-base-city > img").hover(function(){
		$(this).siblings(".mc-hover-city").css("display", "block");
	});
	
	$(".mc-hover-city").hover(function(){
		$(this).css("display", "block");
	},function(){
		$(this).css("display", "none");
	});















	$(".mc-text-in-slides-description-hover").hover(function() {
		$(".mc-popup").css('display', 'block');
	}, function() {
		$(".mc-popup").css('display', 'none');
	});
	
	$(".mc-navbar-toggle").click(function(){
		if( $(".mc-icon-x").css("display") == "none" ){
			$(".mc-icon--").css("display", "none");
			$(".mc-navbar-toggle").css("padding", "3px 10px");
			$(".mc-icon-x").css("display", "block");
		}else{
			$(".mc-icon--").css("display", "block");
			$(".mc-navbar-toggle").css("padding", "5px 10px");
			$(".mc-icon-x").css("display", "none");
		}
	});
	













	$(".mc-googleMap-shadow").hover(function(){
		$(this).css("opacity", "0.4");
	},function(){
		$(this).css("opacity", "0.6");
	});
	
	$(".mc-googleMap-shadow").click(function(){
		$(this).css("display", "none");
	})
	














	/***** Google Maps  *****/

	var sedesAecsa = {"markers": [

	//Barranquilla
	{"latitude": "10.996626", "longitude":"-74.800474", "icon": "images/icons/pin-mapa.png", "baloon_text":
	'<div style="text-align: left;"><b style="color:#a0ce00">AECSA Barranquilla</b><br />Cra. 53 # 68B-125 Local 2-223, <br />Edificio Gran Centro <br /> <span style="color:#a0ce00"><b>Llamanos</b> <br />PBX </span>3869595</div>'},


	//Bogotá
	{"latitude": "4.636801", "longitude":"-74.154634", "icon": "images/icons/pin-mapa.png", "baloon_text":
	'<div style="text-align: left;"><b style="color:#a0ce00">AECSA Bogotá</b><br />Avenida Américas # 46-41<br /> <span style="color:#a0ce00"><b>Llamanos</b> <br />Tel. </span>(1) 287 11 44 - 742 07 19</div>'},


	//Cartagena
	{"latitude": "10.4252932", "longitude":"-75.5496086", "icon": "images/icons/pin-mapa.png", "baloon_text":
	'<div style="text-align: left;"><b style="color:#a0ce00">AECSA Cartagena</b><br />Centro 1, Edif. Ganem Of. 208-209 <br /> <span style="color:#a0ce00"><b>Llamanos</b> <br />Tel. </span>075 664 06 42</div>'},


	//Ibagué
	{"latitude": "4.4546467", "longitude":"-75.2438486", "icon": "images/icons/pin-mapa.png", "baloon_text":
	'<div style="text-align: left;"><b style="color:#a0ce00">AECSA Ibagué</b><br />Cra 3 N. 12-54 <br />Centro Comercial Combeima <br />Oficina 606 <br /> <span style="color:#a0ce00"><b>Llamanos</b> <br />PBX </span>2620019</div>'},


	//Medellín
	{"latitude": "6.2688056", "longitude":"-75.5560112", "icon": "images/icons/pin-mapa.png", "baloon_text":
	'<div style="text-align: left;"><b style="color:#a0ce00">AECSA Medellín</b><br >Calle 10 Sur N.51A-55 Centro Empresarial del Sur <br /> <span style="color:#a0ce00"><b>Llamanos</b> <br />Tel. </span>074 470 6010</div>'},

	]
	};

	$("#mc-googleMap").mapmarker({
		zoom  : 6,
		center   : "8.05922963, -74.87182617",
		markers  : sedesAecsa
	});







	var animationNameInSegment = 'animated slideInRight';
	var animationNameOutSegment = 'animated slideOutRight';
	var animationNameInNoSegment = 'animated slideInLeft';
	var animationNameOutNoSegment = 'animated slideOutLeft';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';






	$(".mc-selection-link").click(function(event) {
		if($(".mc-no-selection").css('display') == 'block' ){
			$(".mc-no-selection").addClass(animationNameOutNoSegment).one(animationEnd, function(){
				$(".mc-no-selection").removeClass(animationNameOutNoSegment);
				$(".mc-no-selection").hide();
				$(".mc-selection").show();
			});
			$(".mc-selection").addClass(animationNameInSegment).one(animationEnd, function(){
				$(".mc-selection").removeClass(animationNameInSegment);
			});
			$('html, body').animate({scrollTop: 0});
			$(".mc-no-selection-link").parent('li').removeClass('active');
			$(".mc-selection-link").parent('li').addClass('active');
		};
	});

	$(".mc-no-selection-link").click(function(event) {
		if($(".mc-no-selection").css('display') != 'block' ){
			var myLink = $(this).attr('href');
			$(".mc-selection-link").parent('li').removeClass('active');
			$(".mc-selection").addClass(animationNameOutSegment).one(animationEnd, function(){
				$(".mc-selection").removeClass(animationNameOutSegment);
				$(".mc-selection").hide();
				$(".mc-no-selection").show();
			});
			$(".mc-no-selection").addClass(animationNameInNoSegment).one(animationEnd, function(){
				$(".mc-no-selection").removeClass(animationNameInNoSegment);
				$(".mc-selection-link").parent('li').removeClass('active');
			});
		};
	});

	$(window).scroll(function(event) {
		if($(".mc-selection").css('display') == 'block' ){
			$(".mc-no-selection-link").parent('li').removeClass('active');
			$(".mc-selection-link").parent('li').addClass('active');
		};
	});









	$("#service-submit").on("click", function(){
		if ($("#service-proyect").val() == "") {
			$("#service-proyect").parent().removeClass("has-error");
			$("#service-pqrs").parent().removeClass("has-error");
			$("#service-description").parent().removeClass("has-error");
			$("#service-name").parent().removeClass("has-error");
			$("#service-document").parent().removeClass("has-error");
			$("#service-address").parent().removeClass("has-error");
			$("#service-city").parent().removeClass("has-error");
			$("#service-phone").parent().removeClass("has-error");
			$("#service-email").parent().removeClass("has-error");
			$("#service-proyect").focus();
			$("#service-proyect").parent().addClass("has-error");
		}else if ($("#service-pqrs").val() == "") {
			$("#service-proyect").parent().removeClass("has-error");
			$("#service-pqrs").parent().removeClass("has-error");
			$("#service-description").parent().removeClass("has-error");
			$("#service-name").parent().removeClass("has-error");
			$("#service-document").parent().removeClass("has-error");
			$("#service-address").parent().removeClass("has-error");
			$("#service-city").parent().removeClass("has-error");
			$("#service-phone").parent().removeClass("has-error");
			$("#service-email").parent().removeClass("has-error");
			$("#service-pqrs").focus();
			$("#service-pqrs").parent().addClass("has-error");
		}else if ($("#service-description").val() == "") {
			$("#service-proyect").parent().removeClass("has-error");
			$("#service-pqrs").parent().removeClass("has-error");
			$("#service-description").parent().removeClass("has-error");
			$("#service-name").parent().removeClass("has-error");
			$("#service-document").parent().removeClass("has-error");
			$("#service-address").parent().removeClass("has-error");
			$("#service-city").parent().removeClass("has-error");
			$("#service-phone").parent().removeClass("has-error");
			$("#service-email").parent().removeClass("has-error");
			$("#service-description").focus();
			$("#service-description").parent().addClass("has-error");
		}else if ($("#service-name").val() == "") {
			$("#service-proyect").parent().removeClass("has-error");
			$("#service-pqrs").parent().removeClass("has-error");
			$("#service-description").parent().removeClass("has-error");
			$("#service-name").parent().removeClass("has-error");
			$("#service-document").parent().removeClass("has-error");
			$("#service-address").parent().removeClass("has-error");
			$("#service-city").parent().removeClass("has-error");
			$("#service-phone").parent().removeClass("has-error");
			$("#service-email").parent().removeClass("has-error");
			$("#service-name").focus();
			$("#service-name").parent().addClass("has-error");
		}else if ($("#service-document").val() == "") {
			$("#service-proyect").parent().removeClass("has-error");
			$("#service-pqrs").parent().removeClass("has-error");
			$("#service-description").parent().removeClass("has-error");
			$("#service-name").parent().removeClass("has-error");
			$("#service-document").parent().removeClass("has-error");
			$("#service-address").parent().removeClass("has-error");
			$("#service-city").parent().removeClass("has-error");
			$("#service-phone").parent().removeClass("has-error");
			$("#service-email").parent().removeClass("has-error");
			$("#service-document").focus();
			$("#service-document").parent().addClass("has-error");
		}else if ($("#service-address").val() == "") {
			$("#service-proyect").parent().removeClass("has-error");
			$("#service-pqrs").parent().removeClass("has-error");
			$("#service-description").parent().removeClass("has-error");
			$("#service-name").parent().removeClass("has-error");
			$("#service-document").parent().removeClass("has-error");
			$("#service-address").parent().removeClass("has-error");
			$("#service-city").parent().removeClass("has-error");
			$("#service-phone").parent().removeClass("has-error");
			$("#service-email").parent().removeClass("has-error");
			$("#service-address").focus();
			$("#service-address").parent().addClass("has-error");
		}else if ($("#service-city").val() == "") {
			$("#service-proyect").parent().removeClass("has-error");
			$("#service-pqrs").parent().removeClass("has-error");
			$("#service-description").parent().removeClass("has-error");
			$("#service-name").parent().removeClass("has-error");
			$("#service-document").parent().removeClass("has-error");
			$("#service-address").parent().removeClass("has-error");
			$("#service-city").parent().removeClass("has-error");
			$("#service-phone").parent().removeClass("has-error");
			$("#service-email").parent().removeClass("has-error");
			$("#service-city").focus();
			$("#service-city").parent().addClass("has-error");
		}else if ($("#service-phone").val() == "") {
			$("#service-proyect").parent().removeClass("has-error");
			$("#service-pqrs").parent().removeClass("has-error");
			$("#service-description").parent().removeClass("has-error");
			$("#service-name").parent().removeClass("has-error");
			$("#service-document").parent().removeClass("has-error");
			$("#service-address").parent().removeClass("has-error");
			$("#service-city").parent().removeClass("has-error");
			$("#service-phone").parent().removeClass("has-error");
			$("#service-email").parent().removeClass("has-error");
			$("#service-phone").focus();
			$("#service-phone").parent().addClass("has-error");
		}else if ($("#service-email").val() == "") {
			$("#service-proyect").parent().removeClass("has-error");
			$("#service-pqrs").parent().removeClass("has-error");
			$("#service-description").parent().removeClass("has-error");
			$("#service-name").parent().removeClass("has-error");
			$("#service-document").parent().removeClass("has-error");
			$("#service-address").parent().removeClass("has-error");
			$("#service-city").parent().removeClass("has-error");
			$("#service-phone").parent().removeClass("has-error");
			$("#service-email").parent().removeClass("has-error");
			$("#service-email").focus();
			$("#service-email").parent().addClass("has-error");
		}else{
			if ($("input[id=service-accept]:checked").length == 0) {
				$("#service-accept").parent().addClass("has-error");
			}else{
				$("#service-accept").parent().removeClass("has-error");
			};
			$("#service-proyect").parent().removeClass("has-error");
			$("#service-pqrs").parent().removeClass("has-error");
			$("#service-description").parent().removeClass("has-error");
			$("#service-name").parent().removeClass("has-error");
			$("#service-document").parent().removeClass("has-error");
			$("#service-address").parent().removeClass("has-error");
			$("#service-city").parent().removeClass("has-error");
			$("#service-phone").parent().removeClass("has-error");
			$("#service-email").parent().removeClass("has-error");
		}
	});


	$("#form-service").submit(function(){
		if ($("#service-proyect").val() == "") {
			return false;
		}else if ($("#service-pqrs").val() == "") {
			return false;
		}else if ($("#service-description").val() == "") {
			return false;
		}else if ($("#service-name").val() == "") {
			return false;
		}else if ($("#service-document").val() == "") {
			return false;
		}else if ($("#service-address").val() == "") {
			return false;
		}else if ($("#service-city").val() == "") {
			return false;
		}else if ($("#service-phone").val() == "") {
			return false;
		}else if ($("#service-email").val() == "") {
			return false;
		}else{
			if ($("input[id=service-accept]:checked").length == 0) {
				return false;
			};
			return true;
		}
	});













	$("#selection-submit").on("click", function(){
		if ($("#selection-name").val() == "") {
			$("#selection-name").parent().removeClass("has-error");
			$("#selection-document-type").parent().removeClass("has-error");
			$("#selection-document").parent().removeClass("has-error");
			$("#selection-address").parent().removeClass("has-error");
			$("#selection-city").parent().removeClass("has-error");
			$("#selection-phone").parent().removeClass("has-error");
			$("#selection-email").parent().removeClass("has-error");
			$("#selection-name").focus();
			$("#selection-name").parent().addClass("has-error");
		}else if ($("#selection-document-type").val() == "") {
			$("#selection-name").parent().removeClass("has-error");
			$("#selection-document-type").parent().removeClass("has-error");
			$("#selection-document").parent().removeClass("has-error");
			$("#selection-address").parent().removeClass("has-error");
			$("#selection-city").parent().removeClass("has-error");
			$("#selection-phone").parent().removeClass("has-error");
			$("#selection-email").parent().removeClass("has-error");
			$("#selection-document-type").focus();
			$("#selection-document-type").parent().addClass("has-error");
		}else if ($("#selection-document").val() == "") {
			$("#selection-name").parent().removeClass("has-error");
			$("#selection-document-type").parent().removeClass("has-error");
			$("#selection-document").parent().removeClass("has-error");
			$("#selection-address").parent().removeClass("has-error");
			$("#selection-city").parent().removeClass("has-error");
			$("#selection-phone").parent().removeClass("has-error");
			$("#selection-email").parent().removeClass("has-error");
			$("#selection-document").focus();
			$("#selection-document").parent().addClass("has-error");
		}else if ($("#selection-address").val() == "") {
			$("#selection-name").parent().removeClass("has-error");
			$("#selection-document-type").parent().removeClass("has-error");
			$("#selection-document").parent().removeClass("has-error");
			$("#selection-address").parent().removeClass("has-error");
			$("#selection-city").parent().removeClass("has-error");
			$("#selection-phone").parent().removeClass("has-error");
			$("#selection-email").parent().removeClass("has-error");
			$("#selection-address").focus();
			$("#selection-address").parent().addClass("has-error");
		}else if ($("#selection-city").val() == "") {
			$("#selection-name").parent().removeClass("has-error");
			$("#selection-document-type").parent().removeClass("has-error");
			$("#selection-document").parent().removeClass("has-error");
			$("#selection-address").parent().removeClass("has-error");
			$("#selection-city").parent().removeClass("has-error");
			$("#selection-phone").parent().removeClass("has-error");
			$("#selection-email").parent().removeClass("has-error");
			$("#selection-city").focus();
			$("#selection-city").parent().addClass("has-error");
		}else if ($("#selection-phone").val() == "") {
			$("#selection-name").parent().removeClass("has-error");
			$("#selection-document-type").parent().removeClass("has-error");
			$("#selection-document").parent().removeClass("has-error");
			$("#selection-address").parent().removeClass("has-error");
			$("#selection-city").parent().removeClass("has-error");
			$("#selection-phone").parent().removeClass("has-error");
			$("#selection-email").parent().removeClass("has-error");
			$("#selection-phone").focus();
			$("#selection-phone").parent().addClass("has-error");
		}else if ($("#selection-email").val() == "") {
			$("#selection-name").parent().removeClass("has-error");
			$("#selection-document-type").parent().removeClass("has-error");
			$("#selection-document").parent().removeClass("has-error");
			$("#selection-address").parent().removeClass("has-error");
			$("#selection-city").parent().removeClass("has-error");
			$("#selection-phone").parent().removeClass("has-error");
			$("#selection-email").parent().removeClass("has-error");
			$("#selection-email").focus();
			$("#selection-email").parent().addClass("has-error");
		}else{
			if ($("input[id=selection-accept]:checked").length == 0) {
				$("#selection-accept").parent().addClass("has-error");
			}else{
				$("#selection-accept").parent().removeClass("has-error");
			};
			if($("#hojadevida").val() == ""){
				$("#hojadevida").parent().parent().addClass("has-error");
			}else{
				$("#hojadevida").parent().parent().removeClass("has-error");
			}
			$("#selection-name").parent().removeClass("has-error");
			$("#selection-document-type").parent().removeClass("has-error");
			$("#selection-document").parent().removeClass("has-error");
			$("#selection-address").parent().removeClass("has-error");
			$("#selection-city").parent().removeClass("has-error");
			$("#selection-phone").parent().removeClass("has-error");
			$("#selection-email").parent().removeClass("has-error");
		}

	});


$("#form-selection").submit(function(){
	if ($("#selection-name").val() == "") {
		return false;
	}else if ($("#selection-document-type").val() == "") {
		return false;
	}else if ($("#selection-document").val() == "") {
		return false;
	}else if ($("#selection-address").val() == "") {
		return false;
	}else if ($("#selection-city").val() == "") {
		return false;
	}else if ($("#selection-phone").val() == "") {
		return false;
	}else if ($("#selection-email").val() == "") {
		return false;
	}else{
		if ($("input[id=selection-accept]:checked").length == 0) {
			return false;
		};
		if($("#hojadevida").val() == ""){
			return false;
		};
		return true;
	}
});














});

