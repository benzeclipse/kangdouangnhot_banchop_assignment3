// alert("JavaScript works!");
// Banchop Ben Kangdouangnhot
// SDI 1304
// Project 3

// variables
var check = true;
var callTech = "1-800-555-5555";
var check =  0,
    cell3 = 15,
    cell1 = 5,
    cell2 = 5,
    cell4 = 5,
    cell = true,
    mV = 5 + 10.5,
    cellsRead = ["4.7", " 4.8", " 15.5", " 4.9"]; 
    
    
// Cell output conditions
var cellCondition = function ( good, bad, mV ) {
	
if( cell === true ){
	console.log("You have" + good + ", you have a " + bad  + mV + " milliVolts");
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
else { console.log(cells[2] , "Please call" , callTech + feed ) }

};


// Nested Loop
var readRead = function () {	
    var newRead = [ "4.6", "4.7", "4.8", "4.9"];
	for( i = 0; i < cellsRead.length; i++);
	console.log("Cells readings are " + cellsRead);
	// local variable
	for ( x = 0; x < newRead.length; x++ ) {
		console.log ( "New readings are " + newRead);
	}
		return newRead;	
};

var newReadings = function ( ) {
	console.log( "New Readings are as follow..." , newRead);
};

// calling the cellCondition and checkCells function

var feedBack = getFeedBack();

getCheckCells( "Checking cells ", " please wait...", feedBack );


cellCondition( " 3 good cells", "cell that is reading " , mV );

readRead(  );

var mV = getReadings ( );



