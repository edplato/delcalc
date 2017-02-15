//60,000 divided by 120BPM = 500 milliseconds (.5 seconds)
//multiply 1.5 for dotted values
//multiply .667 for triplets

// enter key 
//  $(".searchbox").on("keypress", function(e) {
//     if (e.keyCode == 13) {





var num = "";
var multiplierArr = [];

function submitBpm() {
	var bpm = document.getElementById("form-bpm").value;
	bpmCheck(bpm);
	document.getElementById("bpm-display").innerHTML = bpm;
	multiplier(bpm);
	notesCalc(bpm);
	tripletsCalc(bpm);
	dottedCalc(bpm);
}


//safety reload if 0 or NaN entered
function bpmCheck(bpm){
	if(isNaN(bpm) || bpm == "" || bpm == 0) {
		location.reload();
	}
}


//array for bpm multipliers
function multiplier(num){
	multiplierArr = [];
	for(var y=.25; y<=32; y*=2){
		multiplierArr.push(y);
	}
}

//calculate notes table
function notesCalc(bpm){
var x = "";
var y = "";
for(var i=1; i<=8; i++){
	x = "table-n" + i;
	y = (60000 / bpm) / multiplierArr[i-1];
	document.getElementById(x).innerHTML = y.toFixed(2);
   }
}

//calculate triplets table
function tripletsCalc(bpm){
var x = "";
var y = "";
for(var i=1; i<=8; i++){
	x = "table-t" + i;
	y = (40000 / bpm) / multiplierArr[i-1];
	document.getElementById(x).innerHTML = y.toFixed(2);
   }
}

//calculate dotted table
function dottedCalc(bpm){
var x = "";
var y = "";
for(var i=1; i<=8; i++){
	x = "table-d" + i;
	y = (90000 / bpm) / multiplierArr[i-1];
	document.getElementById(x).innerHTML = y.toFixed(2);
   }
}

