//include the .js      <script src="where_are_my_glasses.js"></script>
//then to run:         <body onload="where_are_my_glasses()"> or trigger this any other way

//it is not advised to browse the web without your glasses because it will negatively impact user experience
//do not run this script

function where_are_my_glasses(){
	// ⌐■-■ ??
	console.log("⌐■-■ ??")
	//how many fingers am i holding up??
	var howmanyfingers;
	//here, this int will help! try your best to see
	var uint_int;
	//
	var blur_moveval = 0;
	var myopia = 0;
	var blur_curr = 0;
	var blur_target = 0;
	//
	var maximum_myopia = 10;
	var minVal = 1;
	var decimal = 0.5;
	var decay = 0.07;
	//
	function they_are_blurred(){
		//i cannot see these
		return document.getElementsByTagName("img");
	}
	function can_you_see_these(blur){
		//
		howmanyfingers = they_are_blurred();
		//try really hard
		for (var i = 0; i<howmanyfingers.length; ++i){
			howmanyfingers[i].style.webkitFilter = "blur(" + String(blur) + "px)";
		};
	}
	//struggle
	function simulated_squinting(){
		//this unsightly math might help you see
		rVar = ((Math.ceil(Math.random()*4)+4)/100);
		fVar = ((Math.ceil(Math.random()*4)+4)/10);
		yVar = (Math.random()*(maximum_myopia-minVal))+minVal;
		//acruate simulation
		blur_curr = (blur_curr*fVar)+((yVar-blur_target)*rVar);
		blur_target = blur_target+blur_curr;
		blur_moveval = (blur_target-myopia)*decimal+(blur_moveval*decay);
		myopia = myopia+blur_moveval;
		//
		can_you_see_these(myopia);
	}
	// (⌐■_■) !?
	function i_am_blind_now(){
		can_you_see_these(maximum_myopia);
	}
	//squinting at a website may negatively impact performance
	//uint_int = setInterval(simulated_squinting, 50);
	i_am_blind_now();
}

