/*const materials=["Innerspring", "Hybrid", "Memory Foam", "Gel-infused", "Polyfoam", "Latex"];
const colors=["Azure", "Ivory", "Mulberry", "Olive", "Tan"];
const sizes=["California King", "King", "Queen", "Double", "Twin", "Crib"]; */

var materials="";
var colors="";
var sizes="";
var base=0;
var rate=1;

$(document).ready(function(){
	
	$("#a11").click(function(){
		$("#material-choice").html("Material: Innerspring");
		materials="Innerspring";
		rate=1;
	});
	$("#a12").click(function(){
		$("#material-choice").html("Material: Hybrid");
		materials="Hybrid";
		rate=2.7;
	});
	$("#a13").click(function(){
		$("#material-choice").html("Material: Memory Foam");
		materials="Memory Foam";
		rate=2.5;
	});
	$("#a14").click(function(){
		$("#material-choice").html("Material: Gel-infused");
		materials="Gel-infused";
		rate=2;
	});
	$("#a15").click(function(){
		$("#material-choice").html("Material: Polyfoam");
		materials="Polyfoam";
		rate=1.9;
	});
	$("#a16").click(function(){
		$("#material-choice").html("Material: Latex");
		materials="Latex";
		rate=1.5;
	});
	$("#a21").click(function(){
		$("#color-choice").html("Color: Azure");
		colors="Azure";
	});
	$("#a22").click(function(){
		$("#color-choice").html("Color: Ivory");
		colors="Ivory";
	});
	$("#a23").click(function(){
		$("#color-choice").html("Color: Mulberry");
		colors="Mulberry";
	});
	$("#a24").click(function(){
		$("#color-choice").html("Color: Olive");
		colors="Olive";
	});
	$("#a25").click(function(){
		$("#color-choice").html("Color: Tan");
		colors="Tan";
	});
	$("#a31").click(function(){
		$("#size-choice").html("Size: California King");
		sizes="California King";
		base=5890;
	});
	$("#a32").click(function(){
		$("#size-choice").html("Size: King");
			sizes="King";
			base=3700;
	});
	$("#a33").click(function(){
		$("#size-choice").html("Size: Queen");
			sizes="Queen";
			base=2650;
	});
	$("#a34").click(function(){
		$("#size-choice").html("Size: Double");
			sizes="Double";
			base=1046;
	});
	$("#a35").click(function(){
		$("#size-choice").html("Size: Twin");
			sizes="Twin";
			base=850;
	});
	$("#a36").click(function(){
		$("#size-choice").html("Size: Crib");
			sizes="Crib";
			base=720;
	});
	$("#checkout-part").hide();
	$("#Order").click(function(){
		$("#custom").hide();
		$("#checkout-part").show();
		$("#M1").html(materials);
		$("#C1").html(colors);
		$("#S1").html(sizes);
		let price = base*rate;
		$("#P1").html("$"+price);
	});
});


