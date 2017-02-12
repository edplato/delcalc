//60,000 divided by 120BPM = 500 milliseconds (.5 seconds)
//multiply 1.5 for dotted values
//multiply .667 for triplets

// var nameValue = document.getElementById("uniqueID").value;

// var bpm = document.getElementById("form-bpm").value;

// if(nameValue > 100){
// 	console.log("bigger than 100");
// }

// $("form").serializeArray();

// function submitBpm() {
// 	// var bpm = document.getElementById("form-bpm").value;
// 	// calculateBpmNotes(bpm);
// 	// calculateBpmTriplets(bpm);
// 	// autoBpm(bpm);
// 	console.log("hi");

// }



// function calculateBpmNotes(bpm) {
// 	document.getElementById("table-1").innerHTML = ((60000 / bpm)*4);
// 	document.getElementById("table-2").innerHTML = (60000 / bpm)*2;
// 	document.getElementById("table-4").innerHTML = (60000 / bpm);
// 	document.getElementById("table-8").innerHTML = (60000 / bpm)/2;
// 	document.getElementById("table-16").innerHTML = (60000 / bpm)/4;
// 	document.getElementById("table-32").innerHTML = (60000 / bpm)/8
// 	document.getElementById("table-64").innerHTML = (60000 / bpm)/16;
// 	document.getElementById("table-128").innerHTML = (60000 / bpm)/32;
// }

// function calculateBpmTriplets(bpm) {
// 	document.getElementById("table-1t").innerHTML = ((40000 / bpm)*4).toFixed(2);
// 	document.getElementById("table-2t").innerHTML = (40000 / bpm)*2;
// 	document.getElementById("table-4t").innerHTML = (40000 / bpm);
// 	document.getElementById("table-8t").innerHTML = (40000 / bpm)/2;
// 	document.getElementById("table-16t").innerHTML = (40000 / bpm)/4;
// 	document.getElementById("table-32t").innerHTML = (40000 / bpm)/8
// 	document.getElementById("table-64t").innerHTML = (40000 / bpm)/16;
// 	document.getElementById("table-128t").innerHTML = (40000 / bpm)/32;
// }

// function calculateBpmDotted(bpm) {
// 	document.getElementById("table-1d").innerHTML = (90000 / bpm)*4;
// 	document.getElementById("table-2d").innerHTML = (90000 / bpm)*2;
// 	document.getElementById("table-4d").innerHTML = (90000 / bpm);
// 	document.getElementById("table-8d").innerHTML = (90000 / bpm)/2;
// 	document.getElementById("table-16d").innerHTML = (90000 / bpm)/4;
// 	document.getElementById("table-32d").innerHTML = (90000 / bpm)/8
// 	document.getElementById("table-64d").innerHTML = (90000 / bpm)/16;
// 	document.getElementById("table-128d").innerHTML = (90000 / bpm)/32;
// }


// function autoBpm(bpm){
// var x = "";
// var result = "";
// for(var i=1; i<=8; i++){
// 	x = "table-id" + i;


// 	console.log(x);
// 	}


// 	for(var y=.25; y<=32; y*=2){
// 		console.log("y is" + y);

// 	}
// 	console.log("outside y is" + y);
// 	document.getElementById(x).innerHTML = i;
// }
