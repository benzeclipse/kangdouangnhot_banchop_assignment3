// alert("JavaScript works!");
// Banchop Ben Kangdouangnhot
// SDI 1304
// Project 3

// global variables
var checking = true;
var callTech = "1-800-555-5555";
var check =  0,
    cell3 = 15,
    cell1 = 5,
    cell2 = 5,
    cell4 = 5,
    cell = true,
    mV = 5 + 10.5,
    cellsRead = ["4.7", " 4.8", " 15.5", " 4.9"]; 
 
 // properties objects  
var indicator = { readout : true, deadload : 3.0, OL : "Overload!",
				 loadCels : [1, 2, 3, 4], scale : "Good"
};

// method procedure, method accessor, argument object
getIndicator = function () {
var key = { raw : 13294 };
getInfo = function () {
    console.log( indicator.loadCels,  indicator.scale, "Raw counts are " , key.raw);
    }
if ( indicator.deadload < 5) 
	console.log("Scale Indicator checks okay, status " , indicator.readout);
else{	
	console.log("Scale Indicator is bad," , indicator.OL);
    }
    return key;
};
     
// Cell output conditions
var cellCondition = function ( good, bad, mV , checking ) {
// boolean argument added
if( cell === true ){
	console.log("You have" + good + ", you have a " + bad  + mV + " milliVolts is " + checking );
}
else {
	console.log("Checking");
}
return cell;
};

var getReadings = function(m){
    var mv = "All cells check good";
    console.log( mv );
    return mV;
};


var getFeedBack = function( ){
	var feed = ", Thank you for your time...";
	if ( check === true){
	console.log("Checking.. please wait...");
	}
	else{	
	console.log("Hello");
	}
    return feed;
};

// checking number of cells conditions
var getCheckCells = function ( checkCell , message, feed ) {

while ( check <  4 ) {
    check++;
	console.log( checkCell + check + message );
	var cells = [ " Cell 1 good ", " Cell 2 good ", "Cell 3 bad! ", " Cell 4 good " ];
};
//  checking when cells under 8 (milliVolts reading) anything over would be bad
if ( cell1 < 8 && cell2 < 8 && cell3 < 8 && cell4 < 8 ) { 
	console.log("Cells 1, 2, 3, and 4 are good...");
	 }
// if a single cells checks false, this block of code would then run and output a bad cell #	
else { console.log(cells[2] , "Please call" , callTech , feed ) }
       
};

// Nested Loop and changing new cell condition and readings
var readRead = function () {	
    var newRead = [ "4.6 mv", "4.7 mv", "4.8 mv", "4.9 mv"],
    cellNum = [1, 2, 3, 4];
   
	for( i = 0; i < cellsRead.length; i++);
	console.log("\nCells readings are " + cellsRead);
	// local variable
	for ( x = 0; x < i; x++ ) {
		console.log ( "New readings are " + newRead[x] + " for cell " + cellNum[x] );
	}
		return newRead;	
};

var newReadings = function ( f ) {
	console.log( "New Readings are as follow..." , f );
};

// calling the cellCondition and checkCells function

getIndicator();

var feedBack = getFeedBack();

getCheckCells( "Checking cells ", " please wait...", feedBack );

cellCondition( " 3 good cells", "cell that is reading " , mV , checking );

readRead();

newReadings( "testing..." );

var mV = getReadings();

getInfo();

