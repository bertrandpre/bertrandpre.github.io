// Alert
//alert("HopHopOut")



// #####################################
// ######  On fait un countdown ! ######
// #####################################

console.log("Let's start");

/*
now = date();
console.log(now);
console.log($("#count"));
*/
var counter = $("#count"); // on crée un pointeur
//console.log(counter.text())
//counter.text("remplacement des chiffres")

const target_time = new Date("Oct 16 2020 12:00:00")
//console.log(target_time);
var target_time_ms = target_time.getTime();
//console.log(target_time_ms);

/*function setCount() {
	var now = new Date();
	console.log(now);

	var diff = target_time_ms - now.getTime();
	console.log(diff);
	var booContinue = 1
	if (diff == 0) {booContinue=0}

	var days, hours, minutes, seconds, milliseconds;
	days = Math.floor(diff/(1000*3600*24));
	diff = diff%(1000*3600*24);

	hours = Math.floor(diff/(1000*3600));
	diff = diff%(1000*3600);

	minutes = Math.floor(diff/(1000*60));
	diff = diff%(1000*60);

	seconds = Math.floor(diff/(1000));
	diff = diff%(1000);

	milliseconds = diff;

	var result =days+"j "+hours+"h "+minutes+"min "+seconds+"s "+milliseconds+"ms";
	counter.text(result);
	return booContinue;
}


function updateCount() {
    
    if (setCount()==0) {
      alert("It's the end of the world");
    }
    else {
 		var timeinterval = setInterval(updateCount, 1);
	}
}

updateCount()
*/



// Ou autre version fonction anonyme (ne s'arrete pas)
setInterval(function(){
	var now = new Date();
	//console.log(now);

	var diff = target_time_ms - now.getTime();
	//console.log(diff);
	var booContinue = 1
	if (diff == 0) {booContinue=0}

	var days, hours, minutes, seconds, milliseconds;
	days = Math.floor(diff/(1000*3600*24));
	diff = diff%(1000*3600*24);

	hours = Math.floor(diff/(1000*3600));
	diff = diff%(1000*3600);

	minutes = Math.floor(diff/(1000*60));
	diff = diff%(1000*60);

	seconds = Math.floor(diff/(1000));
	diff = diff%(1000);

	milliseconds = diff;

	var result =days+"j "+hours+"h "+minutes+"min "+seconds+"s "+milliseconds+"ms";
	counter.text(result);
}, 10);



/* autre option, mais on a fait la version compliquée
console.log(Date.now());
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
*/



// ##############################################
// ######  On fait apparaitre un bye bye ! ######
// ##############################################

let byebyediv = $("#byebye");

 // byebyediv.show(); ou byebyediv.css('display','block'); en instantané
 // byebyediv.fadeIn();
 // byebyediv.hide(); /// ou fadeOut(); pour un fondu 

// V1

/*$('body').mouseleave(function() {
    byebyediv.fadeIn();
});

$('body').mouseenter(function() {
    byebyediv.hide();
});*/

// Autre syntax

$('body').on('mouseleave', function(){
	byebyediv.fadeIn();
})

$('body').on('mouseenter', function(){
	byebyediv.hide();
})



// TypeWriter
const typewriter = new Typewriter('#typewriter');

//var typewriter = $('#typewriter');

setInterval(function(){
typewriter.typeString('Go Go Go, No time to waste !')
  .callFunction(() => {
    console.log('String typed out!');
  })
  .pauseFor(2000)
  .deleteAll()
  .callFunction(() => {
    console.log('All strings were deleted');
  })
  .start();
},1000);
